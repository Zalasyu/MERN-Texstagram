import express from 'express';


const router = express.Router();

router.post('/signup', (req,res)=> {
	const {username, full_name, password, bio, is_business, website_url, followed_by_user, is_following, is_blocked, is_verified, is_private} = req.body;
	if( !username && !full_name && !password){

		res.status(422).json({error:"Please enter a username, name and password."});

	} else if (!username){
		return res.status(422).json({error:"Please enter a username."});
	} else if( !full_name){

		return res.status(422).json({error:"Please enter your name."});

	} else if( !password){

		return res.status(422).json({error:"Please enter a password."});

	}
	// Otherwise: Save data to Mariadb Profiles

});

export default router;


