import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());

// Configure CORS
app.use(cors({
    origin: 'http://localhost:4000', // Allow requests from this origin
    credentials: true // Fix: Set 'credentials' to true
}));

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to your Express backend!' });
});

// Start the server
app.listen(4000, '0.0.0.0', () => {
    console.log('Server is running on port 4000');
});
