const register = require("../auth/authcontrollers");
const login = require("../auth/login");
const logout = require("../auth/logout")
const verify = require("../auth/verifyEmail")
const { ctrlWrapper } = require("../../helpers/index");
const getCurrent = require("../auth/current");
const addAvatar = require("../auth/avatar")
const resendVerifyEmail = require("../auth/resendVerify");
module.exports = {
register: ctrlWrapper(register),
login: ctrlWrapper(login),
getCurrent: ctrlWrapper(getCurrent),
logout: ctrlWrapper(logout),
addAvatar: ctrlWrapper(addAvatar),
verify: ctrlWrapper(verify),
resendVerifyEmail: ctrlWrapper(resendVerifyEmail),

}