// Playwright runs the specs of Ludia with the same copy of Playwright the
// runner uses (tests/playwright.js), so the runner and the specs never load
// two different versions of the test API.
'use strict';

const { defineConfig } = require('./tests/playwright.js');

// Port 4176 by default, so Ludia never collides with the other apps of the
// suite when they run their own suites at the same time.
const port = Number(process.env.PORT || 4176);

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  timeout: 120000,
  retries: 1,
  reporter: 'line',
  use: {
    baseURL: `http://127.0.0.1:${port}/`,
    headless: true,
  },
  webServer: {
    command: `node scripts/serve.js ${port}`,
    url: `http://127.0.0.1:${port}/`,
    timeout: 30000,
    reuseExistingServer: false,
  },
});
