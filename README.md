# @welcomer-bot/utils

Shared defaults for the Welcomer dashboard and bot.

## Installation

The package is published on GitHub Packages. Point the `@welcomer-bot` scope to that registry, with a token that has the `read:packages` scope.

```yaml
# .yarnrc.yml
npmScopes:
  welcomer-bot:
    npmRegistryServer: "https://npm.pkg.github.com"
    npmAuthToken: "${GITHUB_TOKEN}"
```

```bash
yarn add @welcomer-bot/utils
```

## API

```ts
import {
  defaultMessages,
  type DefaultMessage,
  type DefaultModuleType,
} from "@welcomer-bot/utils";
```

- `DefaultModuleType`: `"WELCOME" | "GOODBYE" | "WELCOME_DM"`.
- `DefaultMessage`: `{ content: string; embeds: APIEmbed[] }`, with `APIEmbed` from `discord-api-types/v10`.
- `defaultMessages`: the default message of each module type. The object is deeply frozen: copy it (`structuredClone`) before editing.

## Development

```bash
yarn install
yarn lint && yarn typecheck && yarn test && yarn build
```

A GitHub release publishes the package through `.github/workflows/publish.yml`.
