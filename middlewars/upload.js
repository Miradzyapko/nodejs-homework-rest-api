const multer = require("multer");
const path = require("path");
const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
    destination:  tempDir,
    
    filename: (req, file, cb) => {

 // const uniquePreffix =`${Date.now()}_${Math.round(Math.random() * 1E9)}`;
// const filename = `${uniquePreffix}_${file.originalname}`; //
  cb(null, file.originalname); 
    },


});


const upload = multer({
    storage: multerConfig
   
    


});
module.exports = upload;