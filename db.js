// mongodb+srv://${process.env.DB_USER}:%{process.env.DB_PASS}@cluster0.y7qvhm1.mongodb.net/images?retryWrites=true&w=majority
const mongoose = require('mongoose');
require('dotenv').config();

const startConnect = async () => {
  try {
    console.clear();
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.y7qvhm1.mongodb.net/images?retryWrites=true&w=majority`
    );
    console.log('Conectado no banco de dados');
  } catch (error) {
    console.log('Falha ao conectar no banco de dados. \n\n****\n\n\n');
    console.log(error.message);
  }
};

module.exports = startConnect;
