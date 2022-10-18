const { By } = require('selenium-webdriver')

const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/week6/day2/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Does it add a movie', async () => {
    
    let addMovie = await driver.findElement(By.xpath('//form/input'))

    await addMovie.sendKeys('django\n')

    await driver.sleep(3000)

})

test('does it cross off a movie', async () => {

    let crossMovie = await driver.findElement(By.xpath('//li/span'))

    await crossMovie.click()

    await driver.sleep(3000)

})

test('does it delete a movie', async () => {

    let deleteMovie = await driver.findElement(By.xpath('//li/button'))

    await deleteMovie.click()

    await driver.sleep(3000)

})

test('does it delete a movie', async () => {

    let messageChecker = await driver.findElement(By.xpath('//main/aside'))

    await messageChecker.click()

    await driver.sleep(3000)

})

