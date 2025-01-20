import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port =  3001;

// Database connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'walid99',
  database: 'username passwords',
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.json("Let's go mfs");
});

app.get('/usercredentials', (req, res) => {
  const q = 'SELECT username, password FROM usercredentials';
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
