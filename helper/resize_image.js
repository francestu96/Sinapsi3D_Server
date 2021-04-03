const fs = require('fs')
const sharp = require('sharp')
const path = require('path');

exports.resize = async (req,dest) =>{
    const { filename: image } = req.file 
    await sharp(req.file.path)
    .resize(500)
    .jpeg({quality: 50})
    .toFile(
        path.resolve(dest,image)
    )
    if (fs.existsSync(req.file.path))
        fs.unlinkSync(req.file.path)
    return dest.replace('.','')+image
}
