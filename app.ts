require('dotenv').config()

const express = require('express');
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(helmet());
app.use(express.json({ limit: '50MB' }));
app.use(express.static('public'));
const PORT = process.env.SERVER_PORT;
    
// bodyparser
app.use(express.json())

const calculRoutes = require('./routes/calculRoute')
app.use('/', calculRoutes)

app.get('/', (req, res) => {
    return res.status(201).send(`Serveur lancé`)
});

app.listen(PORT, () =>
    console.log(`votre serveur est sur le port ${PORT}`)
);

module.exports = app;