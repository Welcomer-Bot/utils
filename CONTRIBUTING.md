# Contributing to @welcomer-bot/utils

Thank you for your interest in contributing to this project!

## Development Setup

1. Clone the repository:

```bash
git clone https://github.com/Welcomer-Bot/utils.git
cd utils
```

1. Install dependencies:

```bash
npm install
```

1. Run tests:

```bash
npm test
```

1. Build the project:

```bash
npm run build
```

## Making Changes

1. Create a new branch for your feature or bugfix
2. Make your changes in the `src/` directory
3. Add tests in `src/*.test.ts` files
4. Run tests to ensure everything passes: `npm test`
5. Run the linter: `npm run lint`
6. Build to verify TypeScript compilation: `npm run build`
7. Commit your changes with a clear message
8. Push to your fork and create a Pull Request

## Adding New Utilities

When adding new utility functions:

1. Add the function to an appropriate file in `src/` (or create a new file)
2. Export the function from `src/index.ts`
3. Add comprehensive tests in the corresponding `.test.ts` file
4. Document the function with JSDoc comments including:
   - Description
   - @param tags for all parameters
   - @returns tag for return value
5. Update the README.md with usage examples

## Testing

- Write tests for all new functionality
- Aim for high code coverage
- Tests should be clear and test one thing at a time
- Use descriptive test names

## Code Style

- Follow TypeScript best practices
- Use clear, descriptive variable and function names
- Keep functions small and focused
- Add comments for complex logic
- The linter will enforce basic style rules

## Pull Request Process

1. Ensure all tests pass
2. Update the README.md if you've added new features
3. Follow the existing code style
4. Write clear commit messages
5. Your PR will be reviewed by maintainers

## Publishing

Package publishing is automated via GitHub Actions when a new release is created. Only maintainers can publish new versions.

## Questions?

Feel free to open an issue for any questions or concerns.
