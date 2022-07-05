This is Next.js Boilerplate with opinioned.

1. Use twin.macro + chakra-ui (opt-in) for styling.
2. Use Jotai + react-query for state management.
3. Pre-install react-icons.
4. Pre-install ramdajs.

## Use

``` bash
npx degit https://github.com/leechael/nextjs-boilerplate
```

## Opt-in Chakra-UI

See `lib/providers/FullStyleProvider.tsx`. Use `TwinStyleProvider` only by default, change to `FullStyleProvider` if you use Chakra-UI components.