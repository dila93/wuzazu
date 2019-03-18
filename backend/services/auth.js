'use strict'
const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config.js');

/**
 * @function createToken
 * @desc Returns the access token that allows user to get access in the platform
 * @param  {Object.json} user Object of the user from database
 * @return {String} access token encriypted
 */

function createToken(user){
    const user_in = {
        type_user: user.type_user,
        _id: user._id        
    };
    const payload = {
        sub: (user_in.type_user+','+user_in._id).toString(),
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
    };
    return jwt.encode(payload, environment.SECRET_TOKEN)
}

/**
 * @function decodeToken
 * @desc This function decodes the token encrypted
 * @param  {String} token Access token encrypted 
 * @return {Object.json} token decrypted in readable format
 */
function decodeToken(token) {
    const decoded = new Promise((resolve, reject) => {
        try {            
            const payload = jwt.decode(token, environment.SECRET_TOKEN);
            if (payload.exp <= moment.unix()) {
                reject({
                    status: 401,
                    message: "Token has expired"
                })
            }            
            resolve(payload.sub)
        } catch (e) {
            reject({
                status: 500,
                message: 'Invalid Token'
            })
        }
    });
    return decoded
}

/**
 * @function setEnvironment
 * @description funcion para setear entre entornos
 * @param {String} environment Entorno en uso
 */
function setEnvironment(environment){        
    let dataEnvironment = config[environment];
    return dataEnvironment
}

module.exports = {
    createToken,
    decodeToken,
    setEnvironment
};