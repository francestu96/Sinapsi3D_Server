const controller_root = require('../controllers/root_controller')
const multer = require('multer')

/**
 * An general erro handle
 * @param {*} err 
 * @param {*} res 
 */
const handle_error = (err,res) =>{
    if(err instanceof multer.MulterError){
        if(err.code == 'LIMIT_FILE_SIZE'){
            controller_root.req_fail_upload_file_size(res)
        }else{
            controller_root.req_fail_upload_general(res)
        }
    }else{
        controller_root.req_fail(res)
    }
}

exports.handle_error=handle_error
