const Images = require('../models/Imgs');
const fs = require('fs/promises');

module.exports = class ImagesController {
  static create = async (req, res, next) => {
    try {
      const { name } = req.body;
      const file = req.file;
      const image = new Images({
        name,
        src: file?.path,
      });
      await image.save();
      return res.status(201).send(image);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Error ', error });
    }
  };

  static removeImg = async (req, res, next) => {
    try {
      const image = await Images.findById(req.params.id);
      if (!image) return res.status(404).send({ mesage: 'Image not found.' });
      await fs.unlink(image.src);
      await image.deleteOne();
      return res.status(200).send({ message: 'Imagem removida' });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Error ', error });
    }
  };

  static findAll = async (req, res, next) => {
    try {
      const images = await Images.find({});
      return res.status(200).send(images);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Error ', error });
    }
  };
};
