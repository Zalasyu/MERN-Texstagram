
import express from 'express';
import pool from '../helpers/database.js';

const router = express.Router();

router.get('/api/feed', async (req, res) => {
	try{
		res.status(200).json({Message: "Get Feed."});

	} catch(error){
		res.status(400).send(error.message);

	}

});

export default router;

