const Contact = require('../models/Contact');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

module.exports.contact_post = async (req,res) => {
    const {nom, prenom, email, tel, message} = req.body;

    try{
        const contact = await Contact.create({nom, prenom, email, tel, message});
        res.status(200).json(contact);
    }catch(err){
        res.status(400).json(err.message);
    }
};

module.exports.contact_get = (req,res) => {
    Contact.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports.responce_post = (req,res) => {
    const {id, response} = req.body;
    const contact =Contact.findById(id);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: contact.email,
        subject: 'Response to',
        text: response
    };

    transporter.sendMail(mailOptions ,function(error, info){
        if(error){
            console.log(error);
            res.end('Email failed');
        }else{
            console.log('Email sent : ' + info.response)
            res.end('Email sent');
        }
    });
    
}