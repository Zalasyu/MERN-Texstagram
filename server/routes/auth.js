import express from 'express';
import async from 'async';
import bcrypt from 'bcrypt';
import pool from '../helpers/database.js';


const router = express.Router();

/*
	* Sign Up Route
	* Creates a new profile and encrypts password.
	* */
const signUpRouter = router.post('/signup', async (req,res) => {
	try {
		// Encypt Password
		const saltRounds = 16;
		const password = req.body.password;
		const encryptedPassword = await  bcrypt.hash(password, saltRounds);
		
		// Get rest of request json body.
		const {
			username, profile_pic_url, 
			full_name, 
			bio, is_business, website_url, 
			followed_by_user, is_following, 
			is_blocked, is_verified, 
			is_private} = req.body;
		
		const userCheck = req.body.username;
		const checkSql = "SELECT username from Profiles WHERE username='"+ escape(userCheck) +"';";
		const checkResult = await pool.query(checkSql, [userCheck]);

		if (typeof checkResult[0] != 'undefined'){
			return res.status(422).json({error: "Username already taken!"});

		}

		const sqlQuery = 'INSERT INTO `Profiles` (username, profile_pic_url, full_name, password, bio, is_business, website_url, followed_by_user, is_following, is_blocked ,is_verified, is_private) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)' 

		const result = await pool.query(sqlQuery, [username, profile_pic_url,
			full_name, encryptedPassword, 
			bio, is_business, website_url, 
			followed_by_user, is_following, 
			is_blocked, is_verified, 
			is_private]);

		res.status(200).json(result);
		if( !username && !full_name && !password){

			res.status(422)
				.json({error:"Please enter a username, name and password."});

		} else if (!username){
			return res.status(422).json({error:"Please enter a username."});
		
		} else if( !full_name){

			return res.status(422).json({error:"Please enter your name."});

		} else if( !password){

			return res.status(422).json({error:"Please enter a password."});
		}

	} catch (error) {

		res.status(400).send(error.message);
	}

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
	console.log(match);

	if(match){
		res.status(200).json({message: "Success."});
	} else {
		return res.status(422).json({error: "Invalid email or password!"});
	}

});

export {signUpRouter, loginRouter};
