const Joi = require("joi");

module.exports.userSchemas = {
  validateUserRequest: ({ body }) => {
    const userRegisterSchema = Joi.object({
      fullname: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    });
    return userRegisterSchema.validate(body);
  },
  validateLoginRequest: ({ body }) => {
    const userLoginSchema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    });
    return userLoginSchema.validate(body);
  },
  validateMailRequest: ({ body }) => {
    const userMailSchema = Joi.object({
      email: Joi.string().required(),
      emailTo: Joi.string().required(),
    });
    return userMailSchema.validate(body);
  },
  validatePasswordRequest: ({ body }) => {
    const userPasswordSchema = Joi.object({
      password: Joi.string().required(),
      cpassword: Joi.ref("password"),
    });
    return userPasswordSchema.validate(body);
  },
};
