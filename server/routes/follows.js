// Author: Alec Moldovan
// Description: Contain all CRUD operations effecting the 
// 	followers, followings and profiles tables.
import express from 'express';
import async from 'async';
import pool from '../controllers/database.js';

const router = express.Router();

const follow = router.put("like", async (req, res) =>{





})
const unfollow = router.put("unlike", async (req, res) =>{




})

export { follow, unfollow };
