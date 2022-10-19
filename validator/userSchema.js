const Joi = require("@hapi/joi")

const userValidatorSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    photo: Joi.string().optional(),
    password: Joi.string().min(3).max(50).required(),
    passwordConfirm: Joi.string().min(3).max(50).required(),
})

module.exports = userValidatorSchema;
