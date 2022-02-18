// Author: Alec Moldovan
// Description: This file helps connect the database to our program!
import mariadb from 'mariadb';
import {db_host, db_user, db_name, db_pass} from './config.js';

const pool = mariadb.createPool({

	host:db_host,
	user:db_user,
	password: db_pass,
	database: db_name,
	connectionLimit: 5

});
