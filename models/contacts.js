const mongoose = require("mongoose");
const Joi = require('joi')
const handleMongooseError = require("../middlewars/handleMongooseError");
const contactShema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  })
  contactShema.post("save", handleMongooseError);
  const addSchema = Joi.object({
    name: Joi.string().required().messages({"any.required":`"name" missing required field`}),
    email: Joi.string().email(),
    phone: Joi.string().required(), 
    favorite: Joi.boolean().required(),
  }); 
  const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
  })
  const schemas = {
    addSchema,
    updateFavoriteSchema,
}

 
  module.exports = {
contactShema, 
schemas,
addSchema
  };