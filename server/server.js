import express from 'express';
import mariadb from 'mariadb';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import path from 'path';
import morgan from 'morgan';
import {port} from './config.js';
import { fileURLToPath } from 'url'; //Handles ES module scope error

const app = express();

/*
* MIDDWARE
*/

// Parses incoming JSON requests and puts the parsed data in req.body (For POST and PUT Requests)
app.use(express.json());

// Parses request body  of content-type www-form-urlencoded. (HTML post forms)
app.use(express.urlencoded({extended:false}));

// Log Post Requests body [Config morgan tokens]
morgan.token('body', (req) => JSON.stringify(req.body));

// Use a logger
app.use(morgan('short'));

/*
* Add the path.
*/
// returns the fully-resolved platform-specific Node.js file path.
//const __filename = fileURLToPath(import.meta.url); //
//const __dirname = path.dirname(__filename);
//app.use(express.static(path.join(__dirname, "/public")));

/*
* ROUTING
*/
import authRouter from './routes/auth.js'
import profileRouter from './routes/profile.js'
import feedRouter from './routes/feed.js'

app.post('/signup', authRouter);
app.get('/', feedRouter);
// TODO: Implement req.params for looking up profiles by username.
// app.get('/:username', profileRouter);

/*
* ERROR HANDLING
*/
// Catch 404 and forward to error handler
app.use((req,res,next) => {
	const err = new Error('Not Found!');
	err.status = 404;
	next(err);

});

// Error Handler
app.use( (err, req, res, next) =>{
	// Set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// Render Error Page
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: err});

});
/* Start Listening. */
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

