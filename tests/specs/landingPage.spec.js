// Basic Nightwatch default test style
module.exports = {

    'Landing Page': function (browser) {
        const landingPage = browser.page.LandingPage();      
        landingPage.navigate()
            .click('@viewMoreMarket')
            .click('@ETHButton')
            .assert.visible('@tradingChart')
            .assert.visible('@limit')
            .assert.visible('@market')
            .assert.visible('@stopLimit');
        
    },
    after: (browser) => {
        browser
            .saveScreenshot('./screenshots/landingPage.jpg')
            .end();
    }
};