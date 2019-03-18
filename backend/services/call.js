const path = require('path');
var fs = require('fs');

/*
	call.files:
	llama los cronjobs que esten en el directorio especificado
	Tambien le puede enviar una lista archivos que quiera omitir -> 
		omit = ['example_uno.routes.js', 'example_dos.routes.js']; 
		call.routes(folder, omit)
 */
function files(folder, omit=['']) {
    let dir = path.join(__dirname, '..', folder);
    var files = fs.readdirSync(dir);
    for (i = files.length - 1; i >= 0; i--) {
    	if(omit.indexOf(files[i]) == -1){
        	require(dir + '/' + files[i]);
    	}
    }
}

/*
	call.routes:
	le envia los parametros app de express, la ruta rest y la carpeta de las rutas
	Tambien le puede enviar una lista de archivos que quiera omitir -> 
		omit = ['example_uno.routes.js', 'example_dos.routes.js']; 
		call.routes(app, rest, folder, omit)
 */
function routes(app, rest, folder, omit=['']){
	let dir = path.join(__dirname, '..', folder);
    var files = fs.readdirSync(dir);
    for (i = files.length - 1; i >= 0; i--) {
    	if(files[i].split('.js').length != 1){
    		if(omit.indexOf(files[i]) == -1){
		    	let route = require(dir+'/'+files[i]);
		    	app.use(rest, route);
    		}
    	}
    }
}

module.exports = {
    files,
    routes
};