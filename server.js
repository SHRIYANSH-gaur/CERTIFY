import express from 'express';
import cors from 'cors';
import body from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();


//body parser used to send images/url requests
app.use(body.json({limit: "20mb",extended:true}));
app.use(body.urlencoded({limit: "20mb",extended:true}));
app.use(cors());

const PORT = process.env.PORT ||5000;

//localhost:3000/posts/?
//every routs inside(after posts/ will originate from that post.js folderas we imported it) of post
app.use('/posts', postRoutes);

app.get('/', (req,res)=>{
  res.send("Certify-API");
});



mongoose.connect(process.env.URL, {useNewUrlParser: true});
//to connect to mongoDB





app.listen(PORT, () => `Server running on port ${PORT}`);
