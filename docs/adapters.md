# Adapters Pattern

Goal: keep 3rd-party details private, so the app only imports stable, skinned components.

## How it works

1. Place library glue in `packages/ui/src/adapters/<lib>/*`.
2. Never export adapters. The public wrapper lives in `components/*`.
3. If we swap DayPicker → another lib later, the app stays unchanged.

## Examples we plan/wrap

- `adapters/day-picker` → `components/forms/DateField`
- `adapters/tanstack-table` → `components/data/DataTable`
- `adapters/tremor` → `components/data/Chart` (or similar)
- `adapters/stripe` → `components/forms/PaymentElement` (or similar)
