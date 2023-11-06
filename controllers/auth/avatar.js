const { User }   = require("../../models/users");
const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const avatarPath = path.join(__dirname, "../../", "public", "avatars");
const addAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file;
    const {_id } = req.user;
    const filename = `${_id}_${originalname}`;
    try {
    const newPath = path.join(avatarPath, filename);
    await fs.rename(tempUpload, newPath);
    const avatarURL = path.join("public", "avatars", filename);
    const image = await Jimp.read(newPath);
    await image.resize(250, 250);
    await image.write(newPath)
    await User.findByIdAndUpdate(_id, { image: avatarURL });
    res.json({ avatarURL });

} catch (error) {
    await fs.unlink(tempUpload);
    throw error;
}
};
module.exports = addAvatar;