const mongoose = require('mongoose');
const config = require('../config.js')
const {
    Schema
} = mongoose;
/**
 * Schema for save User data
 * @type {Shcema}
 */

const UserSchema = new Schema({
    nickname: {
        type: String,
        unique: true
    }
});

function capitalize_name (val) {
    if (typeof val !== 'string') val = '';
    let name_arr = val.split(" ");
    let name_cap = [];  

    for (var i = 0; i <= name_arr.length-1; i++) {        
        name_cap.push(name_arr[i].charAt(0).toUpperCase() + name_arr[i].substring(1));
    }  
    return name_cap.join(' ');


    if (typeof val !== 'string') val = '';
    return val.charAt(0).toUpperCase() + val.substring(1);
}

function capitalize (val) {
  if (typeof val !== 'string') val = '';
  return val.charAt(0).toUpperCase() + val.substring(1);
}

module.exports = mongoose.model('User', UserSchema);