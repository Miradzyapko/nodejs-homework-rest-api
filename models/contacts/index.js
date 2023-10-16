const fs = require('fs/promises');
const path = require("path");
const uniqid = require('uniqid');
const contactsPath = path.join("models", "contacts", "contacts.json");
const updateContacts = async (contacts) =>
await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));


const listContacts = async () => {
  
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (id) => {
 
  const contacts = await listContacts();
    const contactById = contacts.find(item=> item.id === id);
    return contactById || null;
};



async function removeContact(id) {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === id);
  if (index === -1) {
    return null;

    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
}

const addContact = async (data) => {
  // ...твій код. Повертає об'єкт доданого контакту.
  const contacts = await listContacts();
  const newContact = {
     id : uniqid(),
     ...data,
  }
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
return newContact;
}



  const updateContact = async (id, data) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === id);
    if (index === -1) {
      return null;
    }
    contacts[index] = {id, ...data};
  await updateContacts(contacts);
  return contacts[index];
  }

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};