const { HttpError } = require("../../helpers/index"); 
 const { User  } = require("../../models/users");
 const verify = async (req, res) => {
    const {verificationToken} = req.params;
    const user = await User.findOne({verificationToken});
    if(!user) {
        throw HttpError(404, "User not found");
    }
    await User.findByIdAndUpdate(user._id, { verificationToken: '', verify: true });
    res.status(200).json({message: 'Verification sucessful'});
    };
 module.exports = verify;