const express = require('express');
const userCtrl = require('../../controllers/user.controller.js');
const api = express.Router();

api.post('/user/create', userCtrl.create);
api.get('/user/:user_id?', userCtrl.user);

module.exports = api;