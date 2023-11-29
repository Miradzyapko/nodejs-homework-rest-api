const getAll = require("../contacts/controllers");
const  getContactById = require("../contacts/controllers");
const   addContact = require("../contacts/controllers");
const deleteContact = require("../contacts/controllers");
const  updateContact = require("../contacts/controllers");
const  updateFavorite = require("../contacts/controllers");

const { ctrlWrapper } = require("../../helpers/index.js");
module.exports = {
    getAll: ctrlWrapper(getAll),
    getContactById: ctrlWrapper(getContactById),
    addContact: ctrlWrapper(addContact),
    updateContact: ctrlWrapper(updateContact),
    deleteContact: ctrlWrapper(deleteContact),
    updateFavorite: ctrlWrapper(updateFavorite),
  
  }