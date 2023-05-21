import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import messageRoutes from './routes/messageRoutes';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/', messageRoutes);

app.listen(port, () => {
  console.log(`Server is up and running on Port: ${port}`);
});
