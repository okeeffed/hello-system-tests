# System Test examples

## Resources 

1. https://github.com/playwright-community/jest-playwright
2. https://github.com/microsoft/playwright
3. https://github.com/hoverinc/playwright-testing-library
4. https://github.com/testing-library/pptr-testing-library
5. https://github.com/puppeteer/puppeteer
6. https://github.com/smooth-code/jest-puppeteer
7. https://www.cypress.io/
8. https://github.com/testing-library/cypress-testing-library

## Demo Playwright

1. Ensure configuration is correct in Jest config.
2. Run `npm test -- playwright`

## Demo Puppeteer

1. Ensure configuration is correct in Jest config.
2. Run `npm test -- puppeteer`

## Demo Cypress

### Headless: false 

`npm run cypress -- open`

### Headless

`npm run cypress -- run --spec "cypress/integration/home.spec.js"`