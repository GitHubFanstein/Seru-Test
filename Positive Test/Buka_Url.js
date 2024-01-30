const {Builder, Browser, By, Key, until, WebElement} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://demoqa.com/text-box');
    await driver.manage().window().maximize();
    await driver.sleep(5000);
  } finally {
    await driver.quit();
  }
})();