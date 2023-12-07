import { puppeteer, ExtensionDebuggerTransport } from './webrun-puppeteer-api.js';

const run = async (tabId) => {
  const api = chrome;
  const extensionTransport = await ExtensionDebuggerTransport.create(api, tabId);
  const browser = await puppeteer.connect({
    transport: extensionTransport,
    defaultViewport: null,
  });

  // use first page from pages instead of using browser.newPage()
  const [page] = await browser.pages();
  if (!page) return;

  await page.goto('https://wikipedia.org');

  const screenshot = await page.screenshot({
    encoding: 'base64',
  });
  console.log(`data:image/png;base64,${screenshot}`);

  const englishButton = await page.waitForSelector('#js-link-box-en > strong');
  await englishButton?.click();

  const searchBox = await page.waitForSelector('#searchInput');
  await searchBox?.type('telephone');
  await page.keyboard.press('Enter');

  await page.close();
};

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({active: true, url: 'https://www.google.com'}, tab =>
    tab.id ? run(tab.id) : null
  );
  // tab.id && run(tab.id);
});
// chrome.commands.onCommand.addListener(command => {
//   if (command === 'test') {
//     console.log('test');
//   }
// });
