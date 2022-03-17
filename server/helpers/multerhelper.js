import multer from 'multer';
import path from 'path';
import util from "util";
//import fs from "fs-extra";

// Max file size allwed: 2 MiB
const maxSize = 2 * 1024 * 1204

const profileStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb( null, __basedir + "/media/profile_pics/");
	},

	filename: (req, file, cb) => {
		cb(null, Date.now() 
			+ "_" + file.originalname);
	}

});

const postsStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		let path = 
		cb( null, __basedir + "/media/posts/");
	},

	filename: (req, file, cb) => {
		cb(null, file.fieldname 
			+ "_" + Date.now() 
			+ "_" + file.originalname);
	}

});

const fileFilter = (req, file, cb) => {
	// Allowed ext
	const filetypes = /jpeg|jpg|png|gif/;

	// Check ext
	const extname =  filetypes.test(path.extname(file.originalname).toLowerCase());

	// Check mime
	const mimetype = filetypes.test(file.mimetype);

	if(mimetype && extname){
		return cb(null,true);
	} else {
		cb('Error: Images Only!');
	}
}

// Initialize multer upload for profile pics
const profileUpload = multer({
	storage: profileStorage,
	limits: {
		fileSize: maxSize
	},
	fileFilter: fileFilter
}).single("file");

// Initialize upload mechanism
const postsUpload = multer({
	storage: postsStorage,
	limits: {
		fileSize: maxSize
	},
	fileFilter: fileFilter
}).single("file");

export let createPost = util.promisify(postsUpload);
export let createProfile = util.promisify(profileUpload);

