const express = require("express");
const  authRouter = express.Router();
const { upload } = require("../../middlewars/index");

/* authRouter.get("/"); */
const   { validateBody } = require("../../middlewars/index");
const { isEmptyBody } = require("../../middlewars/index");
const { authenticate } = require("../../middlewars/index");
const authcontroller  = require("../../controllers/auth/index");
const {  joiRegisterSchema, joiLoginSchema, joiEmailSchema } = require("../../models/users");
const userSingupValidate = validateBody(joiRegisterSchema);
const userSigninValidate = validateBody(joiLoginSchema);
authRouter.post("/register", isEmptyBody, userSingupValidate, authcontroller.register);
authRouter.post("/login", userSigninValidate, authcontroller.login);
authRouter.get("/current", authenticate, authcontroller.getCurrent);
authRouter.post("/logout", authenticate, authcontroller.logout);
authRouter.patch("/avatars", authenticate, upload.single("avatar"), authcontroller.addAvatar)
authRouter.get("/verify/:verificationToken", authcontroller.verify)
authRouter.post("/verify", validateBody(joiEmailSchema),  authcontroller.resendVerifyEmail);
module.exports = authRouter;