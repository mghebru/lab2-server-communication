import express from 'express';
import axios from 'axios';

// Inside this file, set up a basic Express server that listens on a port
//  (e.g., 3000) and logs a message to the console on startup.

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Server is working!');
});

// In server.js, create a new GET route at the path /api/fun-fact.
// This route will be responsible for fetching the data and sending it to the client.
app.get('/api/fun-fact', async (req, res) => {
  try {
    const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');

    // Send only the 'text' property to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching fun fact:', error.message);
    res.status(500).json({ error: 'Failed to fetch fun fact' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
