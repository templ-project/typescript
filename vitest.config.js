import {defineConfig} from 'vitest/config';

export default defineConfig({
  server: {
    fs: {
      deny: ['.jscpd', '.install'],
    },
  },
  test: {
    globals: true,
    environment: 'node',
    exclude: ['**/node_modules/**', '**/dist/**', '**/coverage/**', '**/.jscpd/**', '**/.install/**', '**/*.config.*'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      include: ['src/**/*.ts'],
      exclude: [
        '**/.install/**',
        '**/coverage/**',
        '**/dist/**',
        '**/node_modules/**',
        '**/.jscpd/**',
        '**/src/**/*.spec.ts',
        '**/src/**/*.test.ts',
        '**/src/cli.ts',
        '**/*.config.*',
      ],
      all: true,
      skipFull: false,
    },
  },
});
