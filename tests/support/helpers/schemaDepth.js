const Joi = require('@hapi/joi');

// set minimum and maximum values according to sample Data
const schema = Joi.object({
    stream: 'ethbtc@depth',
    data: Joi.object({
        e: 'depthUpdate',
        E: Joi.number()
            .integer()
            .min(1000000000001)
            .max(2222222222222),
        s: 'ETHBTC',
        U: Joi.number().integer().min(100000001).max(999999999),
        u: Joi.number().integer().min(100000001).max(999999999),
        b: Joi.object([
            Joi.number().integer().min(0.00000000).max(9.99999999),
            Joi.number().integer().min(0.00000000).max(9.99999999),
        ]),
        a: Joi.object([
            Joi.number().integer().min(0.00000000).max(9.99999999),
            Joi.number().integer().min(0.00000000).max(9.99999999),
            Joi.number().integer().min(0.00000000).max(9.99999999),
        ])
    })
});

module.exports = schema;