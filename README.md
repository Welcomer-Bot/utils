# @welcomer-bot/utils

Utilities for Welcomer client and bot, such as text parsers.

[![CI](https://github.com/Welcomer-Bot/utils/actions/workflows/ci.yml/badge.svg)](https://github.com/Welcomer-Bot/utils/actions/workflows/ci.yml)

## Installation

```bash
npm install @welcomer-bot/utils
```

### Installing from GitHub Packages

To install from GitHub Packages, create a `.npmrc` file in your project root:

```
@welcomer-bot:registry=https://npm.pkg.github.com
```

Then authenticate with GitHub Packages using a personal access token with `read:packages` scope.

## Usage

```typescript
import {
  parseMention,
  parseMentions,
  parseChannelMention,
  parseRoleMention,
  escapeMarkdown,
  truncateText,
  capitalizeFirst,
  cleanWhitespace
} from '@welcomer-bot/utils';

// Parse Discord mentions
const userId = parseMention('<@123456789>'); // '123456789'
const userIds = parseMentions('<@123> and <@456>'); // ['123', '456']
const channelId = parseChannelMention('<#123456789>'); // '123456789'
const roleId = parseRoleMention('<@&123456789>'); // '123456789'

// Text utilities
const escaped = escapeMarkdown('*bold* _italic_'); // '\\*bold\\* \\_italic\\_'
const truncated = truncateText('Long text here', 10); // 'Long te...'
const capitalized = capitalizeFirst('hello'); // 'Hello'
const cleaned = cleanWhitespace('  hello   world  '); // 'hello world'
```

## API

### Text Parser Functions

#### `parseMention(text: string): string | null`
Parses a Discord user mention and returns the user ID.

#### `parseMentions(text: string): string[]`
Parses multiple Discord user mentions and returns an array of user IDs.

#### `parseChannelMention(text: string): string | null`
Parses a Discord channel mention and returns the channel ID.

#### `parseRoleMention(text: string): string | null`
Parses a Discord role mention and returns the role ID.

#### `escapeMarkdown(text: string): string`
Escapes markdown special characters in text.

#### `truncateText(text: string, maxLength: number, ellipsis?: string): string`
Truncates text to the specified length, appending an ellipsis (default: '...').

#### `capitalizeFirst(text: string): string`
Capitalizes the first letter of a string.

#### `cleanWhitespace(text: string): string`
Removes extra whitespace from text and trims leading/trailing spaces.

## Development

### Install dependencies

```bash
npm install
```

### Run tests

```bash
npm test
```

### Run linter

```bash
npm run lint
```

### Build

```bash
npm run build
```

## Publishing

This package is automatically published to GitHub Packages when a new release is created on GitHub.

To create a new release:
1. Update the version in `package.json`
2. Create a new tag: `git tag v1.0.0`
3. Push the tag: `git push origin v1.0.0`
4. Create a release on GitHub with the tag

The GitHub Actions workflow will automatically build, test, and publish the package.

## License

MIT
