const { HttpError } = require("../../helpers/index"); 
 const { User  } = require("../../models/users");
 const { PROJECT_URL } = process.env;
 const { sendEmail } = require("../../helpers/index");
/* const  verify  = require("../../controllers/auth/verifyEmail"); */
 async function resendVerifyEmail(req, res) {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, 'user not found');
  }
  if (user.verify) {
    throw HttpError(400, 'Verification has already been passed');
  }
  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target ="blank" href = "${PROJECT_URL}/api/users/verify/${user.verificationToken}">"Click to verify email"</a>`
  };
  await sendEmail(verifyEmail);
  res.status(200).json({ message: "Verification email sent" });
}
module.exports = resendVerifyEmail;
  