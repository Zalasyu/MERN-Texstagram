//Author: Alec Moldovan
// Description: This file contains the 
import express from 'express';
import async from 'async';
import pool from '../helpers/database.js';
import upload from '../middleware/fileUpload.js';
import { createPost } from '../helpers/multerhelper.js';


const router = express.Router();

const getAllPosts = router.get('/', async (req, res) => {

	// Queries for records and fields from Posts irrespective to username.
	const sqlQuery = 'SELECT * FROM Posts;';
	const rows = await pool.query(sqlQuery);
	res.status(200).json(rows);


});

// TODO: Make function read from request's body for the profile page to be served based on the pass arguement (username).
const getPostsPerProfile = router.get('/:username', async (req, res) => {
	try{
		// Queries for all records and fields of all Posts owned by specific username.
		const sqlQuery = "SELECT * FROM Profiles JOIN Posts ON Profiles.username = Posts.username WHERE username=' "+ escape(username) +" '; ";
		const rows = await pool.query(sqlQuery, req.params.username);
		res.status(200).json(rows);

	} catch(error){
		return res.status(400).send(error.message);

	}

});


const createPost = router.post("/:username/create", createPost, async (req, res) => {
	try {
		console.log(req.body);
		console.log(req.file);

		// Get rest of request json body.
		const {
			file, 
			body: {username, caption, location}
			} = req;

			// Check if a file was uploaded.
			if(!file){
				return res.status(400).json({error: "Upload an image file."});
			}

		// Current timestamp
		let today = new Date();
		let date = today.getDate();
		let month = today.getMonth();
		let year = today.getFullYear();
		sql_date = `${year}-${month}-${date}`;

		console.log(sql_date)

		// Initialize default values
		const media = file.destination;

	
		
		const sqlQuery = 'INSERT INTO `Posts`(username, caption, location) VALUES (?,?,?)';
		res.send("OK");

	} catch (err) {

		res.status(400).send(error.message);


	}



});
export default {getAllPosts, getPostsPerProfile, createPost};

