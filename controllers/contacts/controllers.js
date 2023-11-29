  const  { HttpError }  = require('../../helpers/index'); 
  
/* const Joi = require('joi') */

  const { Contact }   = require("../../models/contacts");

/*
const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({"any.required":`"name" missing required field`}),
  email: Joi.string().email(),
  phone: Joi.string().required()
}); */

/* const Contact = mongoose.model("Contact", contactShema); */
const getAll = async(req, res, next) => {
  try {
 const result = await Contact.find();
 res.json(result);
}
catch(error) {
 next(error); 
 
}
};


const  getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findById(id);
    if(!result) {
      throw  HttpError(404, `Contact with '${id}' is not found!`);
    } 

    res.json(result);
  } catch (error) {
    next(error);
  }
};
 
const addContact = async (req, res, next) => {
try {
    const result = await Contact.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

 

const deleteContact =  async (req, res, next) => {
 try {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, `Contact with '${id}' is not found!`);
  }
  res.json({
  message:"Contact deleted!"
  });
    
  } catch (error) {
    next(error);
  }
};

const updateContact =  async (req, res, next) => {
 try {
    
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body,{ new: true,});
    if (!result) {
      throw  HttpError(404, `Contact with '${id}' is not found!`);
    }
    res.json(result);

} catch (error) {
  next(error);
}
};

const updateFavorite = async (req, res, next) => {
  try {
  const { id } = req.params;
  const { favorite } = req.body;

  const result = await Contact.findByIdAndUpdate(id, {favorite},{ new: true, });
  if (!result) {
      throw  HttpError(400, `missing field favorite`);
  }
  res.json(result);
  console.log(result);
}
catch (error) {
  next(error);
}
};



  module.exports = {
    getAll,
    getContactById,
    addContact,
    updateContact ,
    deleteContact,
    updateFavorite,
  };