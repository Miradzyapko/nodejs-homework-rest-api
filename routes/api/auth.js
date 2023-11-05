const express = require("express");
const  authRouter = express.Router();

/* authRouter.get("/"); */
const   { validateBody } = require("../../middlewars/index");
const { isEmptyBody } = require("../../middlewars/index");
const { authenticate } = require("../../middlewars/index");
const authcontroller  = require("../../controllers/auth/index");
const {  joiRegisterSchema, joiLoginSchema } = require("../../models/users");
const userSingupValidate = validateBody(joiRegisterSchema);
const userSigninValidate = validateBody(joiLoginSchema);
authRouter.post("/register", isEmptyBody, userSingupValidate, authcontroller.register);
authRouter.post("/login", userSigninValidate, authcontroller.login);
authRouter.get("/current", authenticate, authcontroller.getCurrent);
authRouter.post("/logout", authenticate, authcontroller.logout);
module.exports = authRouter;