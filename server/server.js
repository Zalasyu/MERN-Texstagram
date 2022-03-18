import express from 'express';
import mariadb from 'mariadb'; // Our relational databse
import cors from 'cors'; // Cross-Origin Resource Sharing 
import path from 'path';
import morgan from 'morgan';
import { port } from './config.js';
import { fileURLToPath } from 'url'; //Handles ES module scope error

const app = express();

/*
* MIDDWARE
*/

// SETUP: Parses incoming JSON requests and puts the parsed data in req.body (For POST and PUT Requests)
app.use(express.json());

// SETUP: Parses request body  of content-type www-form-urlencoded. (HTML post forms)
app.use(express.urlencoded({extended:false}));

// SETUP: Log Post Requests body [Config morgan tokens]
morgan.token('body', (req) => JSON.stringify(req.body));

// SETUP: Use a logger
app.use(morgan('short'));

/*
 * SETUP: Root Path
 * Returns the fully-resolved platform-specific Node.js file path.
 * CRITICAL: Critical for I/O operations like creating posts and profiles.
*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
global.__basedir = __dirname;

/*
* SETUP: CORS (Cross-Origin Resource Sharing)
* So different origins can access our backend
* Our Front-end (React) and server have different origins.
*/
app.use(cors());


/*
 * SETUP: ROUTING
*/
import { signUpRouter, loginRouter } from './routes/auth.js';
import { getAllProfiles, getProfilePage} from './routes/profile.js';
import { getAllPosts, getPostsPerProfile, createContent } from './routes/posts.js';
import { updateBio } from './routes/bio';

// Finds all posts from all profiles and serves to homepage.
app.get('/feed', getAllPosts);

// Finds all posts for specific username
app.get('/:username/gallery', getPostsPerProfile);

// Create a post
app.post('/create', createContent);

// When a user signs up, the upload middleware will enable
// file uploads when a form with the name "image" is activated.
app.post('/signup', signUpRouter);

// Enter user credentials to login. 
// Finds matching username and checks if enter password matches stored password
app.post('/', loginRouter);

// Finds and serves the target username.
app.get('/:username', getProfilePage);

// Serves all Profiles in database Profile table
app.get('/network', getAllProfiles);

// Updates selected User's biography in their profile table.
app.put('/edit_bio', updateBio);


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

