Let's dive in to the package setup.

# Setup

Install Node.js 20 or later. From the repository root, install dependencies and build the package:

~~~sh
npm install
npm run build
~~~

The build writes ESM files to dist/. Run npm test after the build. The test command uses the checked-in fixtures and does not need network access.

If npm install fails, confirm that your registry can reach the package host. The project uses a lockfile; do not remove it to work around an installation error. The README was reviewed against the setup guide on 2026-09-20.
