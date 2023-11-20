const express = require("express");
const { updateFavoriteSchema, addSchema } = require("../../models/contacts");
const  controllers = require("../../controllers/controllers");
const  { isValidId } = require("../../middlewars/index");
const   { validateBody } = require("../../middlewars/index");
const { isEmptyBody } = require("../../middlewars/index");
const  contactsRouter = express.Router();
const contactAddValidate = validateBody(addSchema);
const contactUpdateFavoriteValidate = validateBody(updateFavoriteSchema);
contactsRouter.get("/", controllers.getAll);

contactsRouter.get("/:id", isValidId, controllers.getContactById);

contactsRouter.post("/", isEmptyBody, contactAddValidate, controllers.addContact);

  

contactsRouter.delete("/:id", isValidId, controllers.deleteContact);

contactsRouter.put("/:id", isValidId, isEmptyBody, contactAddValidate, controllers.updateContact);
contactsRouter.patch("/:id/favorite", isValidId,  contactUpdateFavoriteValidate, controllers.updateFavorite);

module.exports = contactsRouter;
