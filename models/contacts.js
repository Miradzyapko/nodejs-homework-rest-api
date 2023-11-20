const { Schema, model } = require("mongoose");

const Joi = require("joi");
const { handleMongooseError, runValidatorsAtUpdate } = require("../middlewars/index");
const contactSchema = new Schema({
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
  },
    { versionKey: false, timestamps: true});
  
  contactSchema.post("save", handleMongooseError);
  contactSchema.pre("findOneAndUpdate", runValidatorsAtUpdate);
  contactSchema.post("findOneAndUpdate", handleMongooseError);
  const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(), 
    favorite: Joi.boolean(),
  }); 
  const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
  });
  /*
  const schemas = {
    addSchema,
    updateFavoriteSchema
} */

const Contact = model("contact", contactSchema);
  module.exports = {
Contact,
updateFavoriteSchema,
addSchema,
  };