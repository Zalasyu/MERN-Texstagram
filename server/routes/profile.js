// Author: Alec Moldovan
// Description: This file contains the 
import express from 'express';
import pool from '../helpers/database.js';
import { getPostsPerProfile } from './posts.js';

const router = express.Router();

const getAllProfiles = router.get('/network', async (req, res) => {
	try{
		const sqlQuery = 'SELECT * FROM Profiles;'
		const rows = await pool.query(sqlQuery);
		res.status(200).json(rows);

	} catch(error){
		res.status(400).send(error.message);

	}

});

const getProfilePage = router.get('/:username', async (req, res) => {
	try{

		const sqlQuery = 'SELECT * FROM Profiles JOIN Posts ON Profiles.username = Posts.owned_by WHERE Profiles.username=?;'
		const rows = await pool.query(sqlQuery, req.params.username);
		res.status(200).json(rows);

	} catch(error){
		res.status(400).send(error.message);

	}

});

const updateBio = router.put('/:username/edit_bio', async (req, res) => {
	try{

		const sqlQuery = 'UPDATE Profiles SET bio = ? WHERE username = ?';
        const bio = req.body.bio;
        const username = req.body.username;

		const rows = await pool.query(sqlQuery, [bio, username]);
		res.status(200).json(rows);

	} catch(error){
		res.status(400).send(error.message);

	}

});

export { getAllProfiles, getProfilePage, updateBio };

