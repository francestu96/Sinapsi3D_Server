const multer = require('multer');

const storage =  multer.memoryStorage();

const file_filter = (_, file, cb) => {
    if (file.mimetype.split("/")[0] === 'image') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload_middleware = multer({ storage: storage, fileFilter: file_filter });
module.exports = upload_middleware;