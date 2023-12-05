const { HttpError } = require("../../helpers/index"); 
 const { User  } = require("../../models/users");
const verify = async (req, res, next) => {
    const {verificationToken} = req.params;
    try {
        const user = await User.findOne({verificationToken});
        if (!user) {
            throw HttpError(404, "User not found");
        }
        await User.findByIdAndUpdate(user._id,
            {verify: true, verificationToken: null});
        res.status(200).json({ message: 'Verification sucessful' });
    } catch (error) {
        next(error);
    }
}
 module.exports = verify;