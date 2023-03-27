const express = require('express');
const morgan = require('morgan');

const dotenv = require('dotenv');
dotenv.config();

const routes = require("./API/routes");
const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(routes);

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
