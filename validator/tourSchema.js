const Joi = require("@hapi/joi")


const tourValidatorSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    // duration: Joi.number().min(1).max(90).required(),
    // maxGroupSize: Joi.number().min(1).max(30).required(),
    // difficulty: Joi.string().required(),
    // ratingsAverage: Joi.number().min(0).max(5).optional(),
    // ratingsQuantity: Joi.number().min(0).optional(),
    // price: Joi.number().min(1).required(),
    // description: Joi.string().min(10).max(500).optional(),
    // imageCover: Joi.string().required(),
    // imaages: Joi.array().items(Joi.string()).optional(),
    // createdAt: Joi.date().optional(),
    // startDates: Joi.array().items(Joi.date()).optional(),
});

module.exports = tourValidatorSchema;
