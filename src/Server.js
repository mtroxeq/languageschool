const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jezyki'
})

connection.connect()

app.listen(PORT , () => console.log("Working on port "+PORT))

//Rejestracja

app.post('/registration', async (req, res) => {
  const sql = "INSERT INTO students (`name`,`lastName,`password`,`email`,`language`,`level`) VALUES (?, ?, ? ,?, ?, ?)";
  const name = req.body.username;
  const lastName = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const language = req.body.language;
  const level = req.body.level;
  connection.query(sql, [name, lastName, password, email, language, level], (err, data) => {
    if(err) {
      console.error("SQL ERROR: " + err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });  
})