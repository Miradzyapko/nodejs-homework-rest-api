const express = require("express");
const { updateFavoriteSchema, addSchema } = require("../../models/contacts");
const   controllers  = require("../../controllers/contacts/index");
const  { isValidId } = require("../../middlewars/index");
const   { validateBody } = require("../../middlewars/index");
const { isEmptyBody } = require("../../middlewars/index");
const  contactsRouter = express.Router();
const contactAddValidate = validateBody(addSchema);
const contactUpdateFavoriteValidate = validateBody(updateFavoriteSchema);
const { authenticate }  = require("../../middlewars/index");
/* const  router  = require("../../app"); */
/* contactsRouter.use(authenticate); */
contactsRouter.get("/", authenticate, controllers.getAll);

contactsRouter.get("/:id", isValidId,  controllers.getContactById);

contactsRouter.post("/", isEmptyBody, contactAddValidate, authenticate, controllers.addContact);

  

contactsRouter.delete("/:id", isValidId, authenticate, controllers.deleteContact);

contactsRouter.put("/:id", isValidId, isEmptyBody, contactAddValidate, authenticate, controllers.updateContact);
contactsRouter.patch("/:id/favorite", isValidId,  contactUpdateFavoriteValidate, authenticate, controllers.updateFavorite);

module.exports = contactsRouter;
