'use strict'
const mongoose = require('mongoose');
const User = require('../models/user');

async function create(req, res){
    return res.status(200).send({
        success: true,
        message: 'Hello creation'
    })
}

async function user(req, res){
    return res.status(200).send({
        success: true,
        message: 'Hello user'
    })
}

module.exports = {
    create,
    user
};
