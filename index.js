import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to your Express backend!' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


import fetch from 'node-fetch';


setTimeout(async () => {
  try {
    const response = await fetch(`http://localhost:${port}`);
    const data = await response.json();
    console.log('Response from server:', data);
  } catch (error) {
    console.error('Error fetching from server:', error);
  }
}, 1000);