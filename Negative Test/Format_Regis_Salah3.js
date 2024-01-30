// Membuat Akun Baru
// Mengisi Field password tanpa angka

const {Builder, Browser, By, Key, until, WebElement} = require('selenium-webdriver');
const { Executor } = require('selenium-webdriver/http');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    // Membuka website
    await driver.get('https://demoqa.com');
    await driver.manage().window().maximize();
    await driver.sleep(3000);

    // klik Menu Element
    await driver.wait(until.elementLocated(By.css(`#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-up`)), 3000);
    const btn_elemet = await driver.findElement(By.css(`#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-up`));
    btn_elemet.click();
    await driver.sleep(2000);

    await driver.executeScript("document.body.style.zoom='70%'");
    await driver.sleep(3000);
    

    
    

    // klik button Book Store Apk
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="app"]/div/div/div[2]/div[1]/div/div/div[6]/span`)), 3000);
    const click_BookStore = await driver.findElement(By.xpath(`//*[@id="app"]/div/div/div[2]/div[1]/div/div/div[6]/span`));
    await driver.executeScript("arguments[0].click();", click_BookStore);
    await driver.sleep(2000);

 
    // klil menu login
    await driver.wait(until.elementLocated(By.xpath(`/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[6]/div/ul/li[1]`)), 3000);
    const login = await driver.findElement(By.xpath(`/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[6]/div/ul/li[1]`));
    await driver.executeScript("arguments[0].click();", login);
    await driver.sleep(3000);
   

    // masuk kehalaman regis new user dengan mengklik btn new user
    await driver.wait(until.elementLocated(By.id(`newUser`)), 3000);
    const btn_newUser = await driver.findElement(By.id(`newUser`));
    await driver.executeScript("arguments[0].click();", btn_newUser);
    await driver.sleep(2000);


    // Mengisi Field First Name
    await driver.wait(until.elementsLocated(By.id(`firstname`)), 3000);
    await driver.findElement(By.id(`firstname`)).sendKeys(`Joy`, Key.RETURN);
    await driver.sleep(2000);

    // Mengisi Field Last Name
    await driver.wait(until.elementsLocated(By.id(`lastname`)), 3000);
    await driver.findElement(By.id(`lastname`)).sendKeys(`M`, Key.RETURN);
    await driver.sleep(2000);

    // Mengisi Field User Name
    await driver.wait(until.elementsLocated(By.id(`userName`)), 3000);
    await driver.findElement(By.id(`userName`)).sendKeys(`NewUser`, Key.RETURN);
    await driver.sleep(2000);

    // Mengisi Field password tanpa angka
    await driver.wait(until.elementsLocated(By.id(`password`)), 3000);
    await driver.findElement(By.id(`password`)).sendKeys(`@NewUser`, Key.RETURN);
    await driver.sleep(3000);

    // check raddio button im not robbot
    await driver.switchTo().frame(driver.findElement(By.xpath(`//iframe[@title="reCAPTCHA"]`)));
    await driver.sleep(5000);
    const capcha = await driver.findElement(By.css(`.recaptcha-checkbox-border`));
    await driver.executeScript("arguments[0].click();", capcha);
    await driver.sleep(3000);

    await driver.switchTo().defaultContent();
    await driver.sleep(5000);

    // click button register
    await driver.wait(until.elementLocated(By.id(`register`)), 3000);
    const regis = await driver.findElement(By.id(`register`));
    await driver.executeScript("arguments[0].click();", regis);
    await driver.sleep(2000);

    await driver.sleep(5000);

  } finally {
    await driver.quit();
  }
})();