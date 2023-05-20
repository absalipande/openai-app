import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import messageRoutes from './routes/messageRoutes';
dotenv.config();

const app = express();
const port = process.env.PORT || 3070;

app.use(express.json());
app.use(cors());

app.use('/', messageRoutes);

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
