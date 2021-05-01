module.exports = {
  // preset: 'jest-puppeteer',
  preset: 'jest-playwright-preset',
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['chromium', 'webkit', 'firefox'],
    },
  },
};
