const { User }   = require("../../models/users");
const fs = require("fs/promises");
const path = require("path");
 const Jimp = require("jimp"); 
const avatarDir = path.join(__dirname, "../../", "public", "avatars");
const addAvatar = async (req, res) => {
    console.log(req.user);
  
    const {_id } = req.user;
    console.log(req.file);
    const {path: tempUpload, originalname} = req.file;
    const avatarname = `${_id}_${originalname}`; 
   
    const newPath = path.join(avatarDir, avatarname);
    await fs.rename(tempUpload, newPath);
    const avatarURL = path.join("avatars", avatarname);

    const image = await Jimp.read(newPath); 
  await image.resize(250, 250); 
  await image.write(newPath) 
    await User.findByIdAndUpdate(_id, { image: avatarURL });
    res.json({ avatarURL});


    await fs.unlink(tempUpload); 
  
};

module.exports = addAvatar;