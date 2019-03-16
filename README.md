# wuzazu
	Game of drones  
	Rock, Paper, Scissors

	# Installation Guide
	## Requirements

	Tools to have preinstalled:
	1. npm, nodejs, mongodb, nodemon, webpack
	2. Clone the github project
	3. Inside the project folder install the npm modules with `sudo npm i --save`

	## Run the project

	The project could be executed in various ways, to run it you also need to be in the console/terminal inside the project folder.

	### way 1 (recommended by simple):

	`npm run webmon`

	> This execute the mongo service, render react and run nodemon

	### way 2:
	`chmod 777 run`

	> This command give permissions to the bash script file

	`./run`

	> This command would run the **way 1** command in a simple way

	### way 3:
	The following 3 commands would run in different console/terminal tabs

	> NOTICE: The command of the **way 1** solves the fact of run these commands separately to run the project:

	`sudo service mongod restart`

	> This comand restarts the service if it is active and start it if it is turned off

	`sudo webpack`

	> This command renders the view, if it's required to develop in frontend then run `sudo webpack -w`

	`sudo nodemon`

	> This command runs the server code
