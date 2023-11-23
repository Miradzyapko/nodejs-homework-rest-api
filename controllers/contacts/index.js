const getAll = require("./controllers");
const  getContactById = require("./controllers");
const   addContact = require("./controllers");
const deleteContact = require("./controllers");
const  updateContact = require("./controllers");
const  updateFavorite = require("./controllers");

const { ctrlWrapper } = require("../../helpers/index");
module.exports = {
    getAll: ctrlWrapper(getAll),
    getContactById: ctrlWrapper(getContactById),
    addContact: ctrlWrapper(addContact),
    updateContact: ctrlWrapper(updateContact),
    deleteContact: ctrlWrapper(deleteContact),
    updateFavorite: ctrlWrapper(updateFavorite),
  
  }