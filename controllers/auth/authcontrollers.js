 const  { HttpError }  = require("../../helpers/index"); 
  const bcrypt = require("bcryptjs");
const shortid = require("shortid");
/* const Joi = require('joi') */

  const { User }   = require("../../models/users");
  
  const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(user) {
      throw HttpError(409, `${email}  already in use`)
    }
    const verificationToken = shortid();
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({...req.body, password: hashPassword, verificationToken});
    res.status(201).json({
      "user": {
        email: newUser.email,
        subscription: newUser.subscription,
      }
    })
    
     }
    
     module.exports =  register;

    
