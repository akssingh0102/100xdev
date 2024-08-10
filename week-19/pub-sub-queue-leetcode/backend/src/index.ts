import express from 'express';
import { createClient } from 'redis';

const app = express();
app.use(express.json());
const PORT = 3000;

const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));

app.post('/submit', async (req, res) => {
  const problemId = req.body.problemId;
  const code = req.body.code;
  const language = req.body.language;

  try {
    await client.lPush(
      'problems',
      JSON.stringify({ code, language, problemId })
    );
    console.log(
      `Submission received -> problemId: ${problemId} , code: ${code} , language: ${language}`
    );
    // Store in the database
    res.status(200).send('Submission received and stored.');
  } catch (error) {
    console.error('Redis error:', error);
    res.status(500).send('Failed to store submission.');
  }
});

async function startServer() {
  try {
    await client.connect();
    console.log('Connected to Redis');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to Redis', error);
  }
}

startServer();
