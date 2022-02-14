const express = require('express');
const app = express();
const mysql = require('mysql');


const db = mysql.createConnection({
	user: 		'root',
	host: 		'localhost',
	password:	'',
	database:	'Texstagram'
});


app.post('')

app.listen(3001, () => {
	console.log("Server running on Port 3001");
});

