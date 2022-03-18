import express from 'express';
import pool from '../helpers/database.js';

const router = express.Router();


const updateBio = router.put('/edit_bio', async (req, res) => {
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

export { updateBio };
