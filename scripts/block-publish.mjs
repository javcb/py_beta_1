import { readFileSync, existsSync } from 'fs';

const pkgPath = 'packages/ui/src';
const hasPlusImport = existsSync(pkgPath) && readFileSync('packages/ui/src/index.ts','utf-8').includes('vendor/tailwindplus');
if (hasPlusImport) {
  console.error('Publishing blocked: @javcb/ui references vendor/tailwindplus. Keep Plus assets app-only.');
  process.exit(1);
}
console.log('prepublish check passed');