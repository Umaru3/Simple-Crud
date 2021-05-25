const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({ //used for connecting with our database
	user: 'root',
	host: 'localhost',
	password: '',
	database: 'mysql',
});

app.post('/insert', (req, res) => {//function used for posting/inserting our new data to our database. 
	const name = req.body.name;
	db.query(
		"INSERT INTO myTable(fname) VALUES (?)", //Insert query statement.
		[name], 
		(err, result) => {
			if(err){
				console.log(err);
			}else {
				res.send("Success!");
			}

		});
});

app.get('/views', (req, res) => { //function used for getting/retrieveing our data from our database
	db.query("SELECT * FROM myTable",(err, result) => { //Select query statement.
			if(err){
				console.log(err);
			}else {
				res.send(result);
			}

		});
});


app.listen(3001, ()=> {
	console.log("Connected!");
})