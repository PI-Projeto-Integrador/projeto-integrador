require('dotenv').config();
const https = require('https');
const fs = require('fs');

const express = require('express');
const cors = require('cors');

const app = express();

const routesAviao = require('./api/routes/routesAviao');

const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/ready', (req, res) => res.status(200).send({ status: 'ok' }));
app.get('/live', (req, res) => res.status(200).send({ status: 'ok' }));

app.use('/aviao', routesAviao);

https.createServer(app).listen(port, () => {
  console.log(`server is runing at port ${port}`);
});
