# Setup

Use Node.js 20 or later. From the repository root, run:

~~~sh
npm install
npm run build
~~~

The build writes ESM files to dist/. Then run npm test. The tests use checked-in fixtures and need no network access.

If installation fails, check that the registry can reach the package host. Keep the lockfile in place while troubleshooting. This setup matches the guide reviewed on 2026-09-20.
