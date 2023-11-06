const multer = require("multer");
const path = require("path");
const tempDir = path.join(__dirname, "../", "temp");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, tempDir);
    },
    filename: (req, file, cb) =>
    {

 const uniquePreffix =`${Date.now()}_${Math.round(Math.random() * 1E9)}`;
 const filename = `${uniquePreffix}_${file.originalname}`;
  cb(null, filename); 
    },

limits : {
    fileSize: 5*1024*1024,
},

});


const upload = multer({
    storage,
   
    


});
module.exports = upload;