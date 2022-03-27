import {getposts, createposts,updatePost, deletePost} from "../controllers/post.js"
import express from 'express';
const router = express.Router();

//called when localhost:3000/posts/
//router.get('/', (req,res)=>{res.send('This works'); });
//remaining portion goes to controller to de structure

router.get('/', getposts );
//to create posts we call the function createpost from controllers
router.post('/', createposts );
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
//need id to know whicjh post we deldete or update

//these functions(updatePost,deletePost etc) are defined in controllers

export default router;
