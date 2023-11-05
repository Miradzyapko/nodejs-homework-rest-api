  const { HttpError } = require("../../helpers/index"); 
  
/* const Joi = require('joi') */

  const { Contact }   = require("../../models/contacts");

/*
const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({"any.required":`"name" missing required field`}),
  email: Joi.string().email(),
  phone: Joi.string().required()
}); */

/* const Contact = mongoose.model("Contact", contactShema); */
const getAll = async (req, res) => {
  const {_id: owner} = req.user;
 const result = await Contact.find({owner}, "-createdAt -updatedAt".populate("owner", "email"));
 res.json(result);
  }



const  getContactById = async(req, res) => {
  const {_id: owner} = req.user;
    const { id } = req.params;
    const result = await Contact.findById({_id: id, owner});
    if(!result) {
      throw HttpError(404, `Contact with '${id}' is not found!`);
    } 

    res.json(result);
  
}

const addContact = async (req, res) => {
  const {_id} = req.user;

    const result = await Contact.create({...req.body, owner: _id});
    res.status(200).json(result);

}
 

const deleteContact =  async (req, res) => {
 
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, `Contact with '${id}' is not found!`);
  }
  res.json({
  message:"Contact deleted!"
  })
    }
  

const updateContact =  async (req, res) => {
 
    
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body,{ new: true });
    if (!result) {
      throw  HttpError(404, `Contact with '${id}' is not found!`);
    }
    res.json(result);

}
const updateFavorite = async (req, res) => {
  const { id } = req.params;

  const result = await Contact.findByIdAndUpdate(id, req.body,{ new: true });
  if (!result) {
      throw  HttpError(404, `Contact with '${id}' is not found!`);
  }
  res.json(result);
  console.log(result);
}



  module.exports = {
    getAll,
    getContactById,
    addContact,
    updateContact ,
    deleteContact,
    updateFavorite,
  };