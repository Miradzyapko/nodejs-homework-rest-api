const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError, runValidatorsAtUpdate } = require("./hooks");
const userSchema = new Schema({
    
        password: {
          type: String,
          required: [true, 'Set password for user'],
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
        },
        subscription: {
          type: String,
          enum: ["starter", "pro", "business"],
          default: "starter"
        },
        token: String,
        avatarURL: String,
        verify: {
          type: Boolean,
          default: false,
        },
        verificationToken: {
          type: String,
           default: null,
        },
      },
      { versionKey: false, timestamp: true }
    );
      userSchema.post("save", handleMongooseError);
       userSchema.pre("findOneAndUpdate", runValidatorsAtUpdate);
      userSchema.post("findOneAndUpdate", handleMongooseError);  
  const User = model("user", userSchema);
  const joiRegisterSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    subscription: Joi.string(),
    
  }); 
  const joiEmailSchema = Joi.object({
    email: Joi.string().required(),
  });
  const joiLoginSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().email().required()
    
    
  }); 
  module.exports = {
    User,
    joiRegisterSchema,
    joiLoginSchema,
    joiEmailSchema,
  }