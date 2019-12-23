const Joi = require('@hapi/joi');

// set minimum and maximum vakues according to
const schema = Joi.object({
    stream: 'ethbtc@kline_1h',
    data: Joi.object({
        e: 'kline',
        E: Joi.number()
            .integer()
            .min(1000000000001)
            .max(2222222222222),
        s: 'ETHBTC',
        k: Joi.object({
            t: Joi.number().integer().min(1000000000001).max(2222222222222),
            T: Joi.number().integer().min(1000000000001).max(2222222222222),
            s: 'ETHBTC',
            i: '1h',
            f: Joi.number().integer().min(100000001).max(222222222),
            L: Joi.number().integer().min(100000001).max(222222222),
            o: Joi.number().precision(8),
            c: Joi.number().precision(8),
            h: Joi.number().precision(8),
            l: Joi.number().precision(8),
            v: Joi.number().precision(8),
            n: Joi.number().integer().min(10).max(9999),
            x: Joi.boolean(),
            q: Joi.number().precision(8),
            V: Joi.number().precision(8),
            Q: Joi.number().precision(8),
            B: '0'
        })
    })
});


module.exports = schema;