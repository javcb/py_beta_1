# Structure

Monorepo layout:

```
/ (repo root)
├── /src                    # the app
│   └── /vendor/tailwindplus # Tailwind Plus assets (app-only; not in UI lib)
├── /packages/ui            # Plus-free UI package (@javcb/ui)
│   └── /src
│       ├── /tokens         # CSS variables + Tailwind preset usage
│       ├── /adapters       # 3rd-party glue (not exported)
│       ├── /components     # public UI (wrapping adapters)
│       ├── /patterns       # shells/headers/etc
│       └── /internal       # hooks/utils/types (not exported)
└── /docs                   # this documentation
```

**Why this way?**
- The app can use Tailwind Plus directly.
- The UI package stays **Plus-free**, stable, and reusable.
- Apps import only from `@javcb/ui` (public API), not from `adapters/*`.
