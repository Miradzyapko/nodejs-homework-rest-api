  const  { HttpError, ctrlWrapper }  = require("../helpers/Errors"); 
/* const Joi = require('joi') */
const mongoose = require("mongoose");
const contactShema = require("../models/contacts");

/*
const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({"any.required":`"name" missing required field`}),
  email: Joi.string().email(),
  phone: Joi.string().required()
}); */

const Contact = mongoose.model("Contact", contactShema);
const getAll = async(req, res, next) => {
 
  
 const result = await Contact.find();
 res.json(result);
  }
 





const  getContactById = async (req, res) => {
 
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
    if(!result) {
      throw HttpError(404, `Contact with '${contactId}' is not found!`);
    } 

    res.json(result);
  
};

const addContact = async (req, res) => {

    const result = await Contact.create(req.body);
    res.status(200).json(result);

};
 

const deleteContact =  async (req, res) => {
 
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, `Contact with '${contactId}' is not found!`);
  }
  res.json({
  message:"Contact deleted!"
  })
    }
  

const updateContact =  async (req, res) => {
 
    
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true})
    if (!result) {
      throw  HttpError(404, `Contact with '${contactId}' is not found!`);
    }
    res.json(result);

};
const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
  if (!result) {
      throw HttpError(404, "Not found");
  }
  res.json(result);
}



  module.exports = {
    getAll: ctrlWrapper(getAll),
    getContactById: ctrlWrapper(getContactById),
    addContact: ctrlWrapper(addContact),
    updateContact: ctrlWrapper(updateContact),
    deleteContact: ctrlWrapper(deleteContact),
    updateFavorite: ctrlWrapper(updateFavorite)
  };