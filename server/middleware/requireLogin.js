import jwt from "jsonwebtoken";
import JWT_SECRET from "../keys.js";
const authenticate = (req, res, next) => {
	const {authorization} = req.headers;

	// authorization === Bearer fdskafjlkdm
	if(!authorization){
		return res.status(401).json({error: "Not logged in."});
	}
	// Replace Bearer to access token ("stripping")
	authorization.replace("Bearer ", "");
	jwt.verify(token, JWT_SECRET, (err, payload) => {
		if(err) {
			return res.status(401).json({error: "Not logged in."});

		}
		const



	})


}
