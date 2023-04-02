const { Router } = require('express');
const Controller = require('../controller/imagesController');
const upload = require('../config/multer');

const router = Router();

router.post('/', upload.single('image'), Controller.create);
router.get('/', Controller.findAll);
router.delete('/:id', Controller.removeImg);

module.exports = router;
