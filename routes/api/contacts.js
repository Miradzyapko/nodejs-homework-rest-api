const express = require("express");

const controllers = require("../../controllers/controllers");
const contactsRouter = express.Router()




contactsRouter.get('/', controllers.getAll);



contactsRouter.get('/:contactId', controllers.getContactById);
 

contactsRouter.post('/', controllers.addContact);

  

contactsRouter.delete('/:contactId', controllers.deleteContact);

contactsRouter.put('/:contactId', controllers.updateContact);
 

module.exports = contactsRouter;