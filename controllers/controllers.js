const HttpError = require("../../helpers/Errors");
const Joi = require('joi')

const contactService = require('../../models/contacts/index');


const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({"any.required":`"name" missing required field`}),
  email: Joi.string().email(),
  phone: Joi.string().required()
});


const getAll = ('/', async(req, res, next) => {
  try {
  
 const result = await contactService.listContacts();
 res.json(result);
  }
 catch(error) {
  next(error); 
  
}
})




const  getContactById = ('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactService.getContactById(contactId);
    if(!result) {
      throw HttpError(404, `Contact with '${contactId}' is not found!`);
    } 

    res.json(result);
  } catch (error) {
    next(error);
  }
});

const addContact = ('/', async (req, res, next) => {
  try {
  
    const { error } = contactAddSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await contactService.addContact(req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
  

const deleteContact = ('/:contactId', async (req, res, next) => {
  try {
  const { contactId } = req.params;
  const result = await contactService.removeContact(contactId);
  if (!result) {
    throw HttpError(404, `Contact with '${contactId}' is not found!`);
  }
  res.json({
  message:"Contact deleted!"
  })
    }
    catch(error) {
      next (error);
    }
})
const updateContact = ('/:contactId', async (req, res, next) => {
  try {
    if(!Object.keys(req.body).length)
    {
      throw HttpError(400, `Missing fields`)
    }
    const { error } = contactAddSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { contactId } = req.params;
    const result = await contactService.updateContact(contactId, req.body);
    if (!result) {
      throw HttpError(404, `Contact with '${contactId}' is not found!`);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});


module.exports = {
    getAll,
    getContactById,
    deleteContact,
    addContact,
    updateContact,
  };