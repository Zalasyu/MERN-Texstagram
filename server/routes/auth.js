import express from 'express';
import pool from '../helpers/database.js';


const router = express.Router();

// TODO: Deal with default values for parameters
router.post('/signup', async (req,res) => {
	try {
		const {
			username, profile_pic_url, 
			full_name, password, 
			bio, is_business, website_url, 
			followed_by_user, is_following, 
			is_blocked, is_verified, 
			is_private} = req.body;
		
		const userCheck = req.body.username;

		// Check for duplicate entry AND uses mysql.connection.escape() to protect against SQL injection.
		const duplicateEntryCheck = "SELECT * FROM Profiles WHERE username='"+ escape(userCheck) + "'";
		const checkResult = await pool.query(duplicateEntryCheck, [userCheck]);

		// If SELECT query returns a result object then username is already taken.
		if(typeof checkResult != 'undefined'){
			return res.status(422).json({error: "This username exists already!"})
		}


		const sqlQuery = 'INSERT INTO `Profiles` (username, profile_pic_url, full_name, password, bio, is_business, website_url, followed_by_user, is_following, is_blocked ,is_verified, is_private) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)' 

		const result = await pool.query(sqlQuery, [username, profile_pic_url,
			full_name, password, 
			bio, is_business, website_url, 
			followed_by_user, is_following, 
			is_blocked, is_verified, 
			is_private]);
		console.log("Here is the result: " + result.affectedRows);

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

export default router;


