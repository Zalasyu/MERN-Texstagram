// Author: Alec Moldovan
// Description: This file implements a middleware to process blob datatype uploads (images, files, videos).
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb( null, '../../database/media');



	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname));


	}


});

const fileFilter = (req, file, cb) => {
  if (['image/png', 'image/jpg', 'image/jpeg'].includes(file.mimetype)) {
    cb (null, true)
  } else {
    cb (null, false)
  }
}

export const upload = multer({storage: storage});
