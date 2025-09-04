const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  reporter: [['html']],        // raport HTML
});
