const Joi = require('joi');

const onlyLetters = /^[a-zA-Z\s]|[а-яА-Я\s]+$/;
const validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const mailSchema = Joi.object().keys({
    name: Joi.string().regex(onlyLetters, 'name').min(2).max(30).required(),
    email: Joi.string().regex(validEmail, 'email').min(2).max(20).required(),
    subject:  Joi.string().alphanum().min(2).max(60),
    message: Joi.string().min(2).required()
});

module.exports = {
    '/sendmail': mailSchema,
    '/sendOne': mailSchema
};