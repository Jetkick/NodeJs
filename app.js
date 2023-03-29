const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql')

const dotenv = require('dotenv');
dotenv.config();

const routes = require("./API/routes/index");


const app = express();

app.use(morgan('combined'));
app.use(express.json());

app.get('/ping', (req, res) => 
  res.status(200).send('pong')
)

const PORT = process.env.PORT;

const start = async () => {
  try {
    const connection = mysql.createConnection({
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE,
    });

    connection.connect();

    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};


start();

