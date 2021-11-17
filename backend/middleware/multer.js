const multer = require('multer');

const multerStorage = multer.diskStorage({ 
    destination: function (req, file, cb) {
        cb(null, 'media/img'); 
    },
    filename: function (req, file, cb) { 
        console.log(file)
        const ext = file.mimetype.split("/")[1]; 
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = `${file.filename}-${uniqueSuffix}.${ext}`;
        cb(null, filename);
    }
})

module.exports = multer({ 
    storage: multerStorage
}).single('image'); 

