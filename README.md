# wuzazu
Game of drones

# Guía de instalación
## Requerimientos

Herramientas a tener preinstaladas:
1. npm, nodejs, mongodb, nodemon, webpack
2. Clonar el proyecto de github
3. Dentro de la carpeta instalar los modulos de npm con `sudo npm i --save`

## Ejecutar el proyecto

El proyecto se pude ejecutar de varias formas, para ejecutarlo también hace falta estar en la consola dentro de la carpeta del proyecto

### forma 1:

`npm run webmon` > Esto ejecuta el servicio de mongo, renderiza react y ejecuta nodemon

### forma 2:
`chmod 777 run` > Esto se hace por unica vez para darle permisos al archivo de bash script
`./run` > Este comando ejecutaría el comando de la forma 1 de una forma más sencilla

### forma 3:
Los siguientes 3 comandos se ejecutaría en pestañas de consola diferentes > NOTA: cabe aclarar que el comando de la forma 1 resuelve el hecho de ejecutar estos comandos por separado para correr el proyecto:

`sudo service mongod restart` > Este comando reinicia el servicio si esta activo y lo inicia si está apagado
`sudo webpack` > Este comando renderiza la vista, si requiere desarrollo en el front ejecutar `sudo webpack -w`
`sudo nodemon` > Este comando ejecuta el codigo del servidor
