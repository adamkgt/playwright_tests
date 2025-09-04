import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    screenshot: 'on',          // zawsze robi screeny
    video: 'on',               // zawsze nagrywa video
    trace: 'on',               // zawsze zapisuje trace
  },
  reporter: [['html']],        // raport HTML
});
