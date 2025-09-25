# CI & Publishing

## CI

GitHub Actions builds the UI package first, then the app.

Minimal workflow lives in `.github/workflows/ci.yml`.

## Publishing

This repo is app-centric; the UI package is publishable, but private by default.

If you ever publish `@javcb/ui`, do it from a clean branch with no app/vendor files included.
