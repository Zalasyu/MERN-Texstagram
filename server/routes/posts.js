//Author: Alec Moldovan
// Description: This file contains the 
import express from 'express';
import async from 'async';
import pool from '../helpers/database.js';
import upload from '../middleware/fileUpload.js';
import { createPost } from '../helpers/multerhelper.js';


const router = express.Router();

// TODO: Make function read from request's body for the profile page to be served based on the pass arguement (username).
const getPost = router.get('/:username/:id', async (req, res) => {
	try{
		const sqlQuery = 'SELECT Posts.username, Posts.caption FROM Profiles JOIN Posts ON Profiles.username = Posts.username WHERE id=?;'
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
	
		
		const sqlQuery = 'INSERT INTO `Posts`(username, caption, location) VALUES (?,?,?)';
		res.send("OK");

	} catch (err) {

		res.status(400).send(error.message);


	}



});
export default {getPost, createPost};

