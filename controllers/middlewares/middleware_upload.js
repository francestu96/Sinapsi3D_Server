const multer = require('multer')
const path = require('path');
const fs = require('fs');

/**
 * Middle ware for upload Image
 */

 //File size
const limit = {
    fileSize: 10*1024*1024,
  }

// Storage
const storage = multer.diskStorage({
    destination: (_, file, cb) => {
        cb(null, img_upload_dir() );
    },
    filename: (_, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

//file type
const file_filter = (_, file, cb) => {
    if (file.mimetype == 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const img_upload_dir = () =>{
    let dir = process.env.DIR_UPLOAD;

    if (!fs.existsSync(dir)){
        try{
            fs.mkdirSync(dir);
        }catch (ex){

        }
    }

    dir = dir+`\/temp`
    if (!fs.existsSync(dir)){
        try{
            fs.mkdirSync(dir);
        }catch (ex){

        }
    }
    return dir+`\/`;
}

const upload = multer({ storage: storage, fileFilter: file_filter ,limits:limit});
module.exports = upload;