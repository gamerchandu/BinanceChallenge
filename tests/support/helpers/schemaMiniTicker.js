const Joi = require('@hapi/joi');

// set minimum and maximum values according to sample Data
const schema = Joi.object({
    stream: '!miniTicker@arr@3000ms',
    data: Joi.object([{
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'ETHBTC',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(9999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'LTCBTC',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(99999.99999999),
        q: Joi.number().integer().min(0.00000000).max(999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'MATICBTC',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(9999999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(9999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'BTCUSDT',
        c: Joi.number().integer().min(0.00000000).max(9999.99999999),
        o: Joi.number().integer().min(0.00000000).max(9999.99999999),
        h: Joi.number().integer().min(0.00000000).max(9999.99999999),
        l: Joi.number().integer().min(0.00000000).max(9999.99999999),
        v: Joi.number().integer().min(0.00000000).max(99999.99999999),
        q: Joi.number().integer().min(0.00000000).max(999999999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'ETHUSDT',
        c: Joi.number().integer().min(0.00000000).max(999.99999999),
        o: Joi.number().integer().min(0.00000000).max(999.99999999),
        h: Joi.number().integer().min(0.00000000).max(999.99999999),
        l: Joi.number().integer().min(0.00000000).max(999.99999999),
        v: Joi.number().integer().min(0.00000000).max(999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(99999999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'WINBNB',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(9999999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(99999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'BTGBTC',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(99999.99999999),
        q: Joi.number().integer().min(0.00000000).max(99.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'TRXETH',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(99999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(9999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'TOMOBTC',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(9999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'TOMOUSDT',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(9999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(9999999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'TRXBUSD',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(99999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(999999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'ADABTC',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(9999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'WAVESBTC',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(9999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'RLCBTC',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(9999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(99.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'AEETH',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(99999.99999999),
        q: Joi.number().integer().min(0.00000000).max(99.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'ONTETH',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'TRXUSDT',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(9999999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(99999999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'VETUSDT',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(999999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(9999999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'TRXTUSD',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(99999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(999999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'TRXUSDC',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(99999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(999999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'BTTBNB',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(999999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(99999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'BTTUSDT',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(99999999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(9999999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'BTTTUSD',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(999999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(99999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'CELRBNB',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(99999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(9999.99999999),
    },
    {
        e: '24hrMiniTicker',
        E: Joi.number().integer().min(1000000000001).max(2222222222222),
        s: 'CELRBTC',
        c: Joi.number().integer().min(0.00000000).max(9.99999999),
        o: Joi.number().integer().min(0.00000000).max(9.99999999),
        h: Joi.number().integer().min(0.00000000).max(9.99999999),
        l: Joi.number().integer().min(0.00000000).max(9.99999999),
        v: Joi.number().integer().min(0.00000000).max(99999999.99999999),
        q: Joi.number().integer().min(0.00000000).max(99.99999999),
    },
    ])
});

module.exports = schema;