// Author: Alec Moldovan
// Description: This file helps connect the database to our program!
import mariadb from 'mariadb';
import {db_host, db_user, db_name, db_pass} from '../config.js';

// Make sure ENV variables are available.
const pool = mariadb.createPool({

	host:db_host,
	user:db_user,
	password: db_pass,
	database: db_name,
	connectionLimit: 20

});

// Handle Database Connectivity.
pool.getConnection((err, conn) => {

	if(err){
		if(err.code === 'PROTOCOL_CONNECTION_LOST'){
			console.error('Database connection lost.');
		} else if (err.code === 'ER_CON_COUNT_ERROR'){
			console.error('Database has too many connections.');

		} else if (err.code === 'ECONNREFUSED'){
			console.error('Database connection was refused.');
		}

	}
	if (conn){
		conn.release();
	}
	return;

});

// Export Database Pool!
export default pool;
