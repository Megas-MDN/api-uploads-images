const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  fileFilter(_req, file, cb) {
    if (!file.originalname.match(/\.(png|PNG|jpg|JPEG)$/)) {
      return cb(new Error('Apenas jpg ou png são permitidos'));
    }
    cb(null, true);
  },
});

module.exports = upload;
