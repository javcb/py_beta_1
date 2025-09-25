import { mkdirSync, existsSync, writeFileSync, rmSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dir = path.join(root, ".guardrails");
const flag = path.join(dir, "disabled");

const mode = (process.argv[2] || "").toLowerCase();

function status() {
  if (existsSync(flag)) {
    console.log("Guardrails: DISABLED (".concat(flag, " exists)"));
    process.exit(0);
  }
  console.log("Guardrails: ENABLED");
}

switch (mode) {
  case "off":
  case "disable":
    mkdirSync(dir, { recursive: true });
    writeFileSync(
      flag,
      `Guardrails disabled at ${new Date().toISOString()}\nRemove this file or run 'npm run guardrails:enable' to re-enable.\n`
    );
    status();
    break;
  case "on":
  case "enable":
    if (existsSync(flag)) rmSync(flag);
    status();
    break;
  case "status":
  default:
    status();
    break;
}
