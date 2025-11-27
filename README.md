# TypeScript Bootstrap Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js CI](https://github.com/templ-project/typescript/actions/workflows/ci.yml/badge.svg)](https://github.com/templ-project/typescript/actions/workflows/ci.yml)

> A modern TypeScript project template with ESM, testing, linting, and quality tools built-in.

## Quick Start

**Bootstrap a new project:**

```bash
npx --yes --package=github:templ-project/typescript bootstrap ./my-project
cd my-project
npm install
npm test
```

That's it! You now have a fully configured TypeScript project.

### Bootstrap Options

```bash
# Bootstrap with only ESM and CJS builds (no browser builds)
npx --yes --package=github:templ-project/typescript bootstrap --target esm,cjs ./my-project

# Bootstrap as part of a monorepo (removes .husky, .github)
npx --yes --package=github:templ-project/typescript bootstrap --part-of-monorepo ./packages/my-lib

# Show all available options
npx --yes --package=github:templ-project/typescript bootstrap --help
```

See [.npx-install/README.md](.npx-install/README.md) for detailed bootstrap documentation.

## What's Included

- **TypeScript** - Type-safe development with modern features
- **ESM Modules** - Modern JavaScript with Node.js 20+
- **Vitest** - Fast unit testing with coverage
- **ESLint + Prettier** - Code formatting and linting
- **Husky** - Git hooks for pre-commit validation
- **tsc + esbuild** - Multiple build formats (ESM/CJS/Browser/IIFE)
- **TypeDoc** - Automatic API documentation from TypeScript
- **CI/CD** - GitHub Actions workflows included

## Common Commands

```bash
npm start              # Run the app
npm test               # Run tests
npm run test:coverage  # Run tests with coverage
npm run lint           # Lint and auto-fix
npm run format         # Format code with Prettier
npm run build          # Build for production
npm run docs           # Generate TypeDoc documentation
npm run validate       # Run all quality checks
```

## Project Structure

```text
src/
├── index.ts           # Main entry point
└── lib/
    ├── greeter.ts     # Example module with TypeScript types
    └── greeter.spec.ts # Unit tests
```

## Documentation

- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute
- **[Bootstrap Options](.npx-install/README.md)** - Detailed bootstrap/scaffolding options

## Requirements

- Node.js 20+
- npm 10+

## Building

The template builds multiple formats for different use cases:

```bash
npm run build
```

Outputs:

- `dist/esm/` - ES Modules (for Node.js and modern bundlers)
- `dist/cjs/` - CommonJS (for older Node.js)
- `dist/iife/` - Browser bundle (for direct `<script>` usage)
- `dist/browser/` - Optimized browser ESM

## Configuration

All configuration uses shared packages for consistency:

- **ESLint**: `@templ-project/eslint`
- **Prettier**: `@templ-project/prettier`
- **Vitest**: `@templ-project/vitest`
- **TypeDoc**: `typedoc.json`
- **License Check**: `.licensee.json`

## Quality Checks

Every commit is validated with:

- Code formatting (Prettier)
- Linting (ESLint)
- Type checking (TypeScript)
- Unit tests (Vitest)

CI runs additional checks:

- Test coverage
- Duplicate code detection
- License compliance

## Using as a Library

```typescript
// ES Modules
import { hello, Greeter } from '@templ-project/typescript-template';

// CommonJS
const { hello } = require('@templ-project/typescript-template');

// Browser (after npm run build)
<script src="./dist/iife/your-lib.min.js"></script>
<script>
  console.log(YourLib.hello('World'));
</script>
```

## License

MIT © [Templ Project](https://github.com/templ-project)

## Support

- [Report Issues](https://github.com/templ-project/typescript/issues)
- [Read the Docs](https://github.com/templ-project/typescript#readme)
- [Star on GitHub](https://github.com/templ-project/typescript)
