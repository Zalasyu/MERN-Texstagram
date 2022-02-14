import express from 'express';
import mariadb from 'mariadb';

const PORT = process.env.PORT || '3000';

const app = express();

/*
* MIDDWARE
*/
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.post('');

/* Start Listening. */
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

