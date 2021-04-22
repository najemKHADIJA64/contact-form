const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    nom:{
        type: String,
        required: true
    },
    prenom:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    tel:{
        type: String,
        required: true,
        unique: true
    },
    message:{
        type: String,
        required: true
    },
    dateEnv:{
        type: Date,
        default: Date.now()
    }
});

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;