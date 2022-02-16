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
// TODO:Link Feed to Root URL
app.get("/", (res, req) => {


});


app.post('');

/* Start Listening. */
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

