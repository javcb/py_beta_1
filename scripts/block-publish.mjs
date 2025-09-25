// Stop publishing if Tailwind Plus assets are present.
import { existsSync } from "node:fs";
import path from "node:path";

const plusPath = path.join(process.cwd(), "src/vendor/tailwindplus");
if (existsSync(plusPath) && !process.env.ALLOW_PUBLISH) {
  console.error(
    "⛔ Publishing blocked: Tailwind Plus assets detected in src/vendor/tailwindplus. " +
    "Do not publish packages that contain licensed components. " +
    "Set ALLOW_PUBLISH=1 to override (not recommended)."
  );
  process.exit(1);
}
