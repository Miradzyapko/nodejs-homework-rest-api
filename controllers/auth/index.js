const register = require("./authcontrollers");
const login = require("./login");
const logout = require("./logout")
const verify = require("./verifyEmail")
const { ctrlWrapper } = require("../../helpers/index");
const getCurrent = require("./current");
const addAvatar = require("./avatar")
const resendVerifyEmail = require("./resendVerify");
module.exports = {
register: ctrlWrapper(register),
login: ctrlWrapper(login),
getCurrent: ctrlWrapper(getCurrent),
logout: ctrlWrapper(logout),
addAvatar: ctrlWrapper(addAvatar),
verify: ctrlWrapper(verify),
resendVerifyEmail: ctrlWrapper(resendVerifyEmail),

}