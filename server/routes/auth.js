import express from 'express';
import async from 'async';
import bcrypt from 'bcrypt';
//import jwt from 'jwtoken';
//import JWT_SECRET from '../middleware/requireLogin.js';
import pool from '../helpers/database.js';
import { createProfile } from '../helpers/multerhelper.js';
const router = express.Router();


/*
	* Sign Up Route
	* Creates a new profile, downloads uploaded profile pic and encrypts password.
	* */
//TODO: Fix: Don't allow fileupload if user account exists already.
const signUpRouter = router.post('/signup', createProfile, async (req,res, next) => {
	console.log(req.body);
	console.log(req.file);

	// Get rest of request json body.
	const {
		file, 
		body: {name, username, password}

	} = req;

	// Check if a file was uploaded.
	if(!file){
		return res.status(400).send({error: "Upload an image file."});
	}
	
	//Initialize default values for all other required fields that was not passed by the request object
	const profile_pic_url = file.destination;
	const bio = "";
	const is_business = false;
	const website_url = "";
	const followed_by_user = false;
	const is_following = false;
	const is_blocked = false;
	const is_verified = false;
	const is_private = false;

	// Input check
	if( !username && !name && !password){
		return res.status(422)
			.json({error:"Please enter a username, name and password."});
	
	} else if (!username){
		return res.status(422).json({error:"Please enter a username."});
	
	} else if( !name){
		return res.status(422).json({error:"Please enter your name."});

	} else if( !password){
		return res.status(422).json({error:"Please enter a password."});
	}

	// Encypt Password
	const saltRounds = 16;
	const encryptedPassword = await  bcrypt.hash(password, saltRounds);
		
	// Check if account already exists (Prevent duplicate entries)
	const checkSql = "SELECT username from Profiles WHERE username='"+ escape(username) +"';";
	const checkResult = await pool.query(checkSql, [username]);

	if (typeof checkResult[0] != 'undefined'){
		return res.status(422).send({message: "Username already taken!"});
	}


	// Account DNE, so create and insert into database.
	const sqlQuery = 'INSERT INTO `Profiles` (username, profile_pic_url, full_name, password, bio, is_business, website_url, followed_by_user, is_following, is_blocked ,is_verified, is_private) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)' 

	const result = await pool.query(sqlQuery, [username, profile_pic_url, name, encryptedPassword, bio, is_business, website_url, followed_by_user, is_following, is_blocked, is_verified, is_private]);

	// 


	// Success
	res.status(200).json(result);



});


/*
	* Login Route
	* Authencticates username and password
	* */
const loginRouter = router.post('/login', async (req,res) => {

	const {username, password} = req.body;
	if(!username || !password){
		return res.status(422).json({error: "Please enter your email and password."});
	}

	// Check if account exists
	const userCheck = req.body.username;
	const checkSql = "SELECT username, password from Profiles WHERE username='"+ escape(userCheck) +"';";
	const checkResult = await pool.query(checkSql, [userCheck]);

	if (typeof checkResult[0] == 'undefined'){
		return res.status(422).json({error: "Account doesn't exist!"});
	}

	// Compare passsword
	const encryptedPassword = checkResult[0].password;
	const match = await bcrypt.compare(req.body.password, encryptedPassword);

	if(match){
		res.status(200).json({message: "Success."});
	} else {
		return res.status(422).json({error: "Invalid email or password!"});
	}

});


export { signUpRouter, loginRouter };
