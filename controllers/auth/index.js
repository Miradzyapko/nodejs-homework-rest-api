const register = require("../auth/authcontrollers");
const login = require("../auth/login");
const logout = require("../auth/logout")
const { ctrlWrapper } = require("../../helpers/index");
const getCurrent = require("../auth/current");
const addAvatar = require("../auth/avatar")
module.exports = {
register: ctrlWrapper(register),
login: ctrlWrapper(login),
getCurrent: ctrlWrapper(getCurrent),
logout: ctrlWrapper(logout),
addAvatar: ctrlWrapper(addAvatar),
}