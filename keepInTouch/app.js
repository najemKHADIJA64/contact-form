require('dotenv').config({path: './config/.env'});
require('./config/dbaccess');

const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000

//middlewares
app.use(express.json());



app.use(contactRoutes);

app.listen(PORT , () => {
    console.log('App listening on ' + PORT)
});



