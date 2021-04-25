const Joi = require('joi');

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().alphanum().min(3).max(255).required(),
        email: Joi.string().email().min(3).max(255).required(),
        password: Joi.string().min(3).required(),
    });
    return schema.validate( data );
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().min(3).max(255).required(),
        password: Joi.string().min(3).required(),
    });
    return schema.validate( data );
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
