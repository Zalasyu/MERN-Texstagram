// Author: Alec Moldovan
// Description: Contain all CRUD operations effecting the comments table.
import express from 'express';
import async from 'async';
import pool from '../helpers/database.js';

const router = express.Router();

const comment = router.put("comment", async (req, res) =>{





})

const uncomment = router.post("uncomment", async (req, res) =>{




})

const editComment = router.put("editComment", async (req, res) => {



});

export { comment, uncomment, editComment }
