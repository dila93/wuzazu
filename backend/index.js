const AuthService = require('./services/auth.js');
const use_environment = 'develop'; // develop, production
global.environment = AuthService.setEnvironment(use_environment);
const app = require('./app');
const {
	mongoose
} = require('./database/mongodb');
