require('../../../nightwatch.conf');
const pageActions = require('./PageActions');

module.exports = {
    url: function() { 
        return this.api.globals.baseUrl + 'en' ;
    },
    elements: {
        ETHButton: {
            selector: '//*[@class=\'wkcv3t-11 eEZiVP\']/strong[text()=\'ETH\']',
            locateStrategy: 'xpath'
        },
        tradingChart: {
            selector: '.chartContainer.hy0q36-0.faSQzH',
            locateStrategy: 'css'
        },
        limit: {
            selector: '.sc-1n3jmzh-5.ccpUrw>li[data-name=\'limit\']',
            locateStrategy: 'css'
        },
        market: {
            selector: '.sc-1n3jmzh-5.ccpUrw>li[data-name=\'market\']',
            locateStrategy: 'css'
        },
        viewMoreMarket: {
            selector: '.sc-bdVaJa.sc-bwzfXH.sc-19yy82s-1.ilXDgj',
            locateStrategy: 'css'
        },
        stopLimit: {
            selector: '.sc-1n3jmzh-5.ccpUrw>li[data-name=\'oco\']',
            locateStrategy: 'css'
        }       
        
    }
};