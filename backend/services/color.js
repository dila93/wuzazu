var colors = require('colors');

var environment = process.env.development;

class Color {
    debug(message, object) {
        if (!object) object = "";

        if (environment) return;

        console.log(dateFormat(new Date()) + " DEBUG: ".blue + message, object);
    }
    warning(message, object) {
        if (!object) object = "";
        console.log(dateFormat(new Date()) + " WARNING: ".yellow + message, object);
        }
    error(message, object) {
        if (!object) object = "";
        console.log(dateFormat(new Date()) + " ERROR: ".red + message, object);
    }
    info(message, object) {
        if (!object) object = "";
        console.log(dateFormat(new Date()) + " INFO: ".green + message, object);
    }
};

function dateFormat(date) {
    return ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear() + " " +
        ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
}

module.exports = new Color();