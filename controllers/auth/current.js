const { User }   = require("../../models/users");
const { HttpError } = require("../../helpers/index"); 
  const getCurrent = async (req, res) => {
    const { _id } = req.user;
    const user = await User.findById(_id);
    if(!user) {
      throw new HttpError(401, `Not authorized`);
    }
    const { id, email } = req.user;
  
    res.json({
    id, email
      
    })
    
     }
    
     module.exports =  getCurrent;

    
