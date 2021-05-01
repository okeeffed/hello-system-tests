const puppeteer = require('puppeteer');
const { getDocument, queries } = require('pptr-testing-library');
const { getByRole, getByText } = queries;

const options = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
];

let browser, page;
beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  browser.close();
});

describe('Home page', () => {
  it('displays the correct value as it is clicked', async () => {
    await page.goto('http://localhost:3000');

    for (let i = 0; i < 5; i++) {
      for (const option of options) {
        const $document = await getDocument(page);
        const $button = await getByRole($document, 'button', { name: option });
        await $button.click();
        const updatedLabel = await getByText($document, option.toUpperCase());
        expect(updatedLabel).toBeTruthy();
      }
    }
  }, 20000);
});
