require('dotenv').config();

const express = require('express');
const cors = require('cors');
const conn = require('./db/conn');
const funcionarioRoutes = require('./routes/funcionarioRoutes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/health', (request, response) =>
  response.json({ health: "application it's work" })
);

app.use('/funcionario', funcionarioRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Running service on port ${process.env.PORT}`);
});
