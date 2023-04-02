const { Router } = require('express');
const imageRouter = require('./imagesRouter');
const router = Router();

router.use('/images', imageRouter);

module.exports = router;
