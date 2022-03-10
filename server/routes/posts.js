// Author: Alec Moldovan
// Description: This file contains the 
import express from 'express';
import async from 'async';
import pool from '../helpers/database.js';
import upload from '../middleware/fileUpload.js';

const router = express.Router();

// TODO: Make function read from request's body for the profile page to be served based on the pass arguement (username).
const getPost = router.get('/:username/:id', async (req, res) => {
	try{
		const sqlQuery = 'SELECT Posts.username, Posts.caption FROM Profiles JOIN Posts ON Profiles.username = Posts.username WHERE id=?;'
		const rows = await pool.query(sqlQuery, req.params.username);
		res.status(200).json(rows);

	} catch(error){
		res.status(400).send(error.message);

	}

});


const createPost = router.post("/:username/create", async (req, res) => {
	try {

		const {media, caption, location} = req.body;
		const date_created = new Date();
		console.log(date_created);
		
		// Check if a pic/vid was submitted.
		if (!media){
			return res.status(422).json({error: "Error: Please add the media!"});
		}
		const sqlQuery = 'INSERT INTO `Posts`()';
		res.send("OK");

	} catch (err) {

		res.status(400).send(error.message);


	}



});
export default {getPost, createPost};

