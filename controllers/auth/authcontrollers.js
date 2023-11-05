 const { HttpError } = require("../../helpers/index"); 
  const bcrypt = require("bcryptjs");

/* const Joi = require('joi') */

  const { User }   = require("../../models/users");
  
  const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(user) {
      throw HttpError(409, `${email}  already in use`)
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({...req.body, password: hashPassword});
    res.status(201).json({
        email: newUser.email,
      
    })
    
     }
    
     module.exports =  register;

    