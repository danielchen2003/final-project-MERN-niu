
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import 'dotenv/config'

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '100mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

app.get('/',(req,res)=>{
  res.send('This is a root')
})
console.log(process.env.CONNECTION_URL);
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT =   process.env.PORT || serverPort||8888
console.log(PORT);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

  

