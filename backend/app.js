require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/health', (request, response) =>
    response.json({ health: "application it's work" })
);

app.listen(process.env.PORT, () => {
    console.log(`Running service on port ${process.env.PORT}`);
});