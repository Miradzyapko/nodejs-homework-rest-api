const { User }   = require("../../models/users");
const { HttpError } = require("../../helpers/Errors"); 
  const getCurrent = async (req, res) => {
    const { _id } = req.user;
    const user = await User.findById(_id);
    if(!user) {
      throw new HttpError(401, `Not authorized`);
    }
    const { id, email, subscription } = req.user;
  
    res.json({
    id, email, subscription,
      
    })
    
     }
    
     module.exports =  getCurrent;

    
