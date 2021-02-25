# Next.js template

This template is for creating applications with support for the following:

- Next.js
- Typescript
- Jest
- Prettier / ESLint
- Styled-components
- Circular Std font
- Atomic UI Library
- Eslint Great Minds configuration

## Common commands

### `dev`

Runs in development mode.

### `test`

Runs tests using jest. If adding a flag, remember to use `--`, example:

```sh
npm run test -- --watch
```

## Rules

- When creating pages, create container components in `components/containers` directory instead of directly in the `pages` directory. This allows us to keep logic as decoupled as possible from Next.js, as well as make testing easier.

- When creating custom components for your app, import `@greatminds/dp-atomic-ui-lib` and make use of them. There is a default `baseTheme.js` file to start from there.

- This template uses `@greatminds/eslint-config`for ESLint configuration.
