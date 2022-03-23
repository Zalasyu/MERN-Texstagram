//Author: Alec Moldovan
// Description: This file contains the 
import express from 'express';
import async from 'async';
import pool from '../controllers/database.js';
import { createPost } from '../middleware/multerhelper.js';


const router = express.Router();

const getAllPosts = router.get('/feed', async (req, res) => {

	try {
		// Queries for records and fields from Posts irrespective to username.
		const sqlQuery = 'SELECT * FROM Posts;';
		const rows = await pool.query(sqlQuery);
		res.status(200).json(rows);

	} catch(error){


		return res.status(400).send(error.message);

	}


});

// TODO: Make function read from request's body for the profile page to be served based on the pass arguement (username).
const getPostsPerProfile = router.get('/:username/gallery', async (req, res) => {
	try{
		// Queries for all records and fields of all Posts owned by specific username.
		const username = req.params.username; 
		const sqlQuery = "SELECT * FROM Posts WHERE owned_by=?";
		const rows = await pool.query(sqlQuery, [username]);
		res.status(200).json(rows);

	} catch(error){
		return res.status(400).send(error.message);

	}

});


const createContent = router.post("/create", createPost, async (req, res) => {
	try {
		console.log(req.body);
		console.log(req.file);

		// Get rest of request json body.
		const {
			file, 
			body: {username, caption}
			} = req;

			// Check if a file was uploaded.
			if(!file){
				return res.status(400).json({error: "Upload an image file."});
			}

		// Current Date
		let today = new Date();
		let date = today.getDate();
		let month = today.getMonth();
		let year = today.getFullYear();
		let sql_date = `${year}-${month}-${date}`;

		console.log(sql_date)
		const media_url = file.destination;
		
		const sqlQuery = 'INSERT INTO `Posts`(owned_by, media, caption, post_date) VALUES (?,?,?,?)';

		const result = await pool.query(sqlQuery, [username, media_url, caption, sql_date]);

		res.status(200).json(result);
	} catch (err) {

		return res.status(400).send(err.message);


	}



});

const deletePost = router.delete( "/:username/delete_post/:post_id", async (req, res) => {
	try {
		const username = req.params.username;
		const post_id = req.params.post_id;

		
		const sqlQuery = "DELETE FROM Posts WHERE owned_by=? AND post_id=?;";

		const result = await pool.query(sqlQuery, [ username, post_id]);

		res.status(200).json(result);
	} catch (err) {

		return res.status(400).send(err.message);


	}


});

const editPost = router.put( "/:username/edit_post/:post_id", async (req, res) => {
	try {
		console.log(req.body);

		// Get rest of request json body.
		const caption = req.body.caption;
		const username = req.params.username;
		const post_id = req.params.post_id;
		
		const sqlQuery = "UPDATE Posts SET caption=? WHERE owned_by=? AND post_id=?;";

		const result = await pool.query(sqlQuery, [ caption, username, post_id]);

		res.status(200).json(result);
	} catch (err) {

		return res.status(400).send(err.message);


	}



});

export { getAllPosts, getPostsPerProfile, createContent, editPost, deletePost };

