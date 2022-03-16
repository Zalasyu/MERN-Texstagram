// Author: Alec Moldovan
// Description: This file contains the 
import express from 'express';
import pool from '../helpers/database.js';

const router = express.Router();

router.get('/:username', async (req, res) => {
	try{
		const sqlQuery = 'SELECT username, full_name, password FROM Profiles WHERE username=?;'
		const rows = await pool.query(sqlQuery, req.params.username);
		res.status(200).json(rows);

	} catch(error){
		res.status(400).send(error.message);

	}

});

export default router;

