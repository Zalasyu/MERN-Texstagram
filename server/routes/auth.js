import express from 'express';

const router = express.Router();

router.post('/signup', (req,res)=> {
	console.log(req.body.full_name);

});

export default router;


