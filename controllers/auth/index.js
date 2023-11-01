const register = require("../auth/authcontrollers");
const login = require("../auth/login");
const { ctrlWrapper } = require("../../helpers/index");
module.exports = {
register: ctrlWrapper(register),
login: ctrlWrapper(login)
};