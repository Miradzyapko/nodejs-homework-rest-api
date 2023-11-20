const { HttpError } = require("../../helpers/index"); 
 const { User  } = require("../../models/users");
 const bcrypt = require("bcryptjs");
  const jwt = require("jsonwebtoken");
  const { SECRET_KEY } = process.env;
const login = async(req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if(!user) {
      throw  HttpError(401, `Email or password is wrong`);
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare) {
      throw HttpError(401, `Email or password invalid`);
    }
    if(!user.verify) throw HttpError(404, "User not found");
    const payload = {
      id: user._id,
    }
 
     const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
     await User.findByIdAndUpdate(user._id, {token});
     res.json({token,
      user: {
      email: user.email,
     subscription: user.subscription,
      }
   
  });
    } catch(error) {
      next(error);
    }
  };

    module.exports = login;
  