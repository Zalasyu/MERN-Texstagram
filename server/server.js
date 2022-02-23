import express from 'express';
import mariadb from 'mariadb';
import {port} from './config.js';


const app = express();

/*
* MIDDWARE
*/

// Parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());

// Parses request body  of content-type www-form-urlencoded.
app.use(express.urlencoded({extended:false}));

/*
* ROUTING
*/
import profileRouter from './routes/profile.js';
import feedRouter from './routes/feed.js';

// TODO: Make this get request take a parameter to search and serve the right user's profile page.
app.get("/api/", profileRouter);

// Serve the feed (Posts from all users in one place the homepage!)
app.get("/api/feed", feedRouter);


app.post('');

/* Start Listening. */
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

