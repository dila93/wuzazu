const express = require('express');
const path = require('path');
const index = express.Router();

index.get('/',function(req, res) {
    // res.render(path.join(__dirname+'/../../views/index'));
    res.sendFile(path.join(__dirname+'/../../../build/index.html'));
});

index.get('/:route',function(req, res) {
    res.sendFile(path.join(__dirname+'/../../../build/index.html'));
});

index.get('/*',function(req, res) {
    res.sendFile(path.join(__dirname+'/../../../build/index.html'));
});

module.exports = index;