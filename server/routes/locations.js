// Author: Alec Moldovan
// Description: Contain all CRUD operations effecting the locations table.
import express from 'express';
import async from 'async';
import pool from '../helpers/database.js';

const router = express.Router();

const createLocation = router.post("/createLocation", async (req, res) =>{

	try{
		console.log(req.body)
		const city = req.body.city; 
		const state = req.body.state; 
		const sqlQuery = "INSERT INTO Locations (city, state) VALUES (?,?);";
		const rows = await pool.query(sqlQuery, [city, state]);
		res.status(200).json(rows);

	} catch(error){
		return res.status(400).send(error.message);

	}
});

const deleteLocation = router.delete("deleteLocation", async (req, res) =>{




});

const editLocation = router.put("editLocation", async (req, res) => {




});


export { createLocation, deleteLocation, editLocation };
