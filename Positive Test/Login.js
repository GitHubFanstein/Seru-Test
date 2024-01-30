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
  
      // Mengisi Field User Name
      await driver.wait(until.elementsLocated(By.id(`userName`)), 3000);
      await driver.findElement(By.id(`userName`)).sendKeys(`NewUser`, Key.RETURN);
      await driver.sleep(3000);
  
      // Mengisi Field password
      await driver.wait(until.elementsLocated(By.id(`password`)), 3000);
      await driver.findElement(By.id(`password`)).sendKeys(`@NewUser123`, Key.RETURN);
      await driver.sleep(3000);
  
      // click button Login
    //   await driver.wait(until.elementLocated(By.id(`login`)), 3000);
    //   const Login = await driver.findElement(By.id(`login`));
    //   await driver.executeScript("arguments[0].click();", Login);
    //   await driver.sleep(2000);
  
      
  
    } finally {
      await driver.quit();
    }
  })();