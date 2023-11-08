 /* const Joi = require('joi') */
const shortid = require ("shortid");
const { HttpError, sendEmail } = require("../../helpers/index"); 
  const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
  const { User }   = require("../../models/users");
  const { PROJECT_URL } = process.env;
  const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(user) {
      throw HttpError(409, `${email}  already in use`)
    };
    
    const hashPassword = await bcrypt.hash(password, 10);
    const verificationToken = shortid;
    const avatarURL = gravatar.url(email);
    const newUser = await User.create({...req.body, password: hashPassword, verificationToken, avatarURL});
    const verifyEmail = {
      to: email,
      subject: "Verify email",
      html: `<a target ="blank" href = "${PROJECT_URL}/api/users/verify/${verificationToken}">"Click to verify email"></a>`
    };
      await sendEmail(verifyEmail);
    
    res.status(201).json({
      user: {
        email: newUser.email,
        avatarURL,
      }
        
      
    });
    
     };
    
     module.exports =  register;

    
