const getAll = require("../controllers/controllers");
const  getContactById = require("../controllers/controllers");
const   addContact = require("../controllers/controllers");
const deleteContact = require("../controllers/controllers")
const  updateContact = require("../controllers/controllers");
const  updateFavorite = require("../controllers/controllers");
const { ctrlWrapper } = require("../helpers/Errors");
module.exports = {
    getAll: ctrlWrapper(getAll),
    getContactById: ctrlWrapper(getContactById),
    addContact: ctrlWrapper(addContact),
    updateContact: ctrlWrapper(updateContact),
    deleteContact: ctrlWrapper(deleteContact),
    updateFavorite: ctrlWrapper(updateFavorite),
  };