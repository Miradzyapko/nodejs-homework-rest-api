const express = require("express");
const { schemas } = require("../../models/contacts");
const controllers = require("../../controllers/controllers");
const { isValidId, validateBody }  = require("../../middlewars/jIsValidId");
const  contactsRouter = express.Router();

contactsRouter.get("/", controllers.getAll);

contactsRouter.get("/:contactId", isValidId, controllers.getContactById);
 
contactsRouter.post("/", validateBody(schemas.addSchema), controllers.addContact);

  

contactsRouter.delete("/:contactId", isValidId, controllers.deleteContact);

contactsRouter.put("/:contactId", isValidId,  validateBody(schemas.addSchema), controllers.updateContact);
contactsRouter.patch("/:contactId/favorite", isValidId, validateBody(schemas.updateFavoriteSchema), controllers.updateFavorite);

module.exports = contactsRouter;
