 const  { HttpError, sendEmail }  = require("../../helpers/index"); 
  const bcrypt = require("bcryptjs");
const shortid = require("shortid");
 const { PROJECT_URL } = process.env;
/* const Joi = require('joi') */
require("dotenv").config();
  const { User }   = require("../../models/users");
  
const register = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      throw HttpError(409, `${email}  already in use`)
    };
  
    const hashPassword = await bcrypt.hash(password, 10);
    const verificationToken = shortid();
    
    await sendEmail({
      to: email,
      subject: "Verify email",
      html: `<a target ="blank" href ="${PROJECT_URL}/api/users/verify/${verificationToken}">"Click to verify email"</a>`,
      text: `To confirm your registration please open the link ${PROJECT_URL}/api/users/verify/${verificationToken}`
    });
    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
      verificationToken,
    });
   
    
    res.status(201).json({
      "user": {
        email: newUser.email,
        subscription: newUser.subscription,
       
      }
    })
      
    
  } catch (error) {
    next(error);
  }
}
    
     module.exports =  register;

    
