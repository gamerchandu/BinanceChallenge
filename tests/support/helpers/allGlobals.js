var HtmlReporter = require('nightwatch-html-reporter');
var reporterLan = new HtmlReporter({
    openBrowser: false,
    reportsDirectory: __dirname+'../../../../reports',
    reportFilename: 'localReport.html',
    uniqueFilename: true,
    hideSuccess: false,
    relativeScreenshots: true,
    //themeName: 'cover',
});
module.exports = {
    'default': { 
        baseUrl :   'https://www.binance.com/',
        streamDataLLine : 'wss://stream.binance.com:9443/stream?streams=ethbtc@kline_1h',
        streamDataDepth : 'wss://stream.binance.com/stream?streams=!miniTicker@arr@3000ms/ethbtc@depth.b10/ethbtc@aggTrade.b10',
        price   : '2.354',
        amount  : '2313'
    },
    'language': {
        english: '/en',
        chinese: '/cn'
    },

    // Abort all next tests on any fail
    abortOnAssertionFailure: false,

    // Duration between two element checks
    waitForConditionPollInterval: 2000,

    // Timeout duration
    waitForConditionTimeout: 10000,
    retryAssertionTimeout: 5000,

    throwOnMultipleElementsReturned: true,

    // // Before/After Hooks of all tests
    // before: (next) => next(),
    // after: (next) => next(),

    // // Before/After Hooks of test suites
    // beforeEach: (browser, next) => next(),
    // afterEach: (browser, next) => next(),

    beforeSession: function() {
        require('@babel/register');
    },
    
    // To customize output report
    reporter: reporterLan.fn
};