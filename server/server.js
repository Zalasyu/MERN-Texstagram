import express from 'express';
import mariadb from 'mariadb';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import {port} from './config.js';

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
app.use(morgan('combined'));

// Add the path.
app.use(express.static("public"));

/*
* ROUTING
*/
import profileRouter from './routes/profile.js';
import feedRouter from './routes/feed.js';

// Respond with homepage at root path
app.get("/", (req,res) => {
	res.sendFile("/index.html");

})


// TODO: Make this get request take a parameter to search and serve the right user's profile page.
// app.get("/:username", profileRouter);

// Serve the feed (Posts from all users in one place the homepage!)
//app.get("/feed", feedRouter);


app.post('');


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

