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

const getProfilePage = router.get('/:username', getPostsPerProfile, async (req, res) => {
	try{
		console.log(req)

		const sqlQuery = 'SELECT username, full_name, password FROM Profiles WHERE username=?;'
		const rows = await pool.query(sqlQuery, req.params.username);
		res.status(200).json(rows);

	} catch(error){
		res.status(400).send(error.message);

	}

});

export { getAllProfiles, getProfilePage };

