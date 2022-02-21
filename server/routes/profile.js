import express from 'express';
import pool from '../helpers/database.js';

const router = express.Router();

router.get('/', async (req, res) => {
	try{
		const sqlQuery = 'SELECT username, full_name FROM Profiles;'
		const rows = await pool.query(sqlQuery, req.paramas.username);
		res.status(200).json(rows);

	} catch(error){
		res.status(400).send(error.message);

	}

});

export default router;

