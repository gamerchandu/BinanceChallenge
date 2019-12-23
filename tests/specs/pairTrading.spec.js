// BDD style tests
describe('Pair Trading View', function () {

    before(function (browser) {
        this.pairTrading = browser.page.PairTrading();
    });

    test('Pair trading view', function () {

        this.pairTrading
            .navigate()
            .fillInPriceInput()
            .fillInAmountInput()
            .verifyTotal()
            .pause(10000)
            .verifyLogin();
    });

    after(function (browser) {
        browser
            .saveScreenshot('./screenshots/pairTrading.jpg')
            .end();
    });
});