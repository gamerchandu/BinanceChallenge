require('../../../nightwatch.json');
module.exports = {
    url: function () {
        return 'en/trade/ETH_BTC';
    },
    commands: [
        {
            verifyTotal: function () {
                this.waitForElementVisible('@total');
                this.api.getAttribute(this.elements['total'].selector, 'value', function (result) {
                    require('assert').equal(result.value, ( this.globals.price * this.globals.amount ).toFixed(8));
                });

                return this;
            }
        },
        {
            fillInAmountInput: function () {
                this.waitForElementVisible('@amount')
                    .clearValue('@amount')
                    .setValue('@amount', this.api.globals.amount);

                return this;

            }
        },
        {
            fillInPriceInput: function () {
                this.waitForElementVisible('@price');
                for(let k=0 ;k <8 ; k++ ){
                    this.setValue('@price', ['', this.api.Keys.BACK_SPACE]);
                }
                this.setValue('@price', this.api.globals.price);

                return this;
            }
        },
        {
            verifyLogin: function () {
                this.waitForElementVisible('@login')
                    .assert.visible('@login');

                return this;
            }
        }
    ],
    elements: {
        price: {
            selector: 'FormRow-BUY-price',
            locateStrategy: 'id'
        },
        amount: {
            selector: '#FormRow-BUY-quantity',
            locateStrategy: 'css'
        },
        total: {
            selector: '#FormRow-BUY-total',
            locateStrategy: 'css'
        },
        login: {
            selector: '#trade-orderForm-a-BUYlogin',
            locateStrategy: 'css'
        }
    }
};