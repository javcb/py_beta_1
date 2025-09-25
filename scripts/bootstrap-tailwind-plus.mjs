/* Bootstraps Tailwind Plus assets into src/vendor/tailwindplus on fresh clones.
   Usage (choose one):
     TAILWIND_PLUS_ZIP_PATH=/absolute/path/to/tailwind-plus.zip npm i
     TAILWIND_PLUS_S3_URL=s3://bucket/path/tailwind-plus.zip npm i   (requires aws cli)
   Or manually copy your licensed files into src/vendor/tailwindplus/ and re-run install.
*/
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import os from "node:os";

const vendorDir = path.join(process.cwd(), "src/vendor/tailwindplus");
const sentinel = path.join(vendorDir, ".installed");

if (existsSync(sentinel)) {
  console.log("✔ Tailwind Plus assets already installed.");
  process.exit(0);
}

mkdirSync(vendorDir, { recursive: true });

const localZip = process.env.TAILWIND_PLUS_ZIP_PATH;
const s3Url = process.env.TAILWIND_PLUS_S3_URL;

function unzip(zipPath, dest) {
  const isWin = process.platform === "win32";
  const cmd = isWin ? `tar -xf "${zipPath}" -C "${dest}"` : `unzip -oq "${zipPath}" -d "${dest}"`;
  execSync(cmd, { stdio: "inherit" });
}

try {
  if (localZip) {
    unzip(localZip, vendorDir);
  } else if (s3Url) {
    const tmpZip = path.join(os.tmpdir(), `tailwind-plus-${Date.now()}.zip`);
    execSync(`aws s3 cp "${s3Url}" "${tmpZip}"`, { stdio: "inherit" });
    unzip(tmpZip, vendorDir);
  } else {
    console.warn(
      [
        "⚠ Tailwind Plus assets missing.",
        "Provide them via:",
        "  - TAILWIND_PLUS_ZIP_PATH=/path/to/tailwind-plus.zip",
        "    or",
        "  - TAILWIND_PLUS_S3_URL=s3://bucket/path/tailwind-plus.zip (requires aws cli)",
        "Or manually copy your licensed files into src/vendor/tailwindplus/ and re-run install.",
      ].join("\n")
    );
    process.exit(0);
  }
  writeFileSync(sentinel, String(new Date()));
  console.log("✔ Tailwind Plus assets installed.");
} catch (e) {
  console.error("Failed to install Tailwind Plus assets:", e);
  process.exit(1);
}
