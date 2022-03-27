//dont export default as there will be more functions so export name wise
//import the DB model
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getposts= async(req,res)=>{
                             //try catch is needed :)
try {
  const postMessages= await PostMessage.find();
   //but the find function as to acesses the DB hence needs to
   //be defined as ASYNC and add await before calling .find()
   //if success ful return the array of post as json
  console.log(postMessages);
 return( res.status(200).json(postMessages));
}
catch (e) { console.log(e);}

}

export const createposts= async(req,res)=>{
  //  res.send('PostCREation');
//req.body gives us the value passed from the form
  const post= req.body;
  const newpost = new PostMessage(post);
//pass the post into the model
try {
//again it takes time so put await here and async up
    await  newpost.save();
    return(res.status(201).json(newpost));
} catch (e) {
  console.log(e);
}

}
//the /posts/1233 i.e the id will be recieved as we made a  dynamic url
export const updatePost= async (req,res)=>{

  const {id: _id } = req.params;
  const post= req.body;
   if(!mongoose.Types.ObjectId.isValid(_id)){
     res.status(404);
   }
   else{
  const updatedPost= await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true}   );
  res.json(updatedPost);
   }

//the post is an array of properties and it has uniuq id(MongooseId) for that
//we need to spread the properties of it ...post and also  passs the id  for UPDATING


}


export const deletePost= async (req,res)=>{

//we spcified /:id so we have acess to id
  const {id: _id}= req.params;
  //check for valid id

  if(!mongoose.Types.ObjectId.isValid(_id)){
 res.status(404);// no post match
  }
  else{
//delete can take time so await

  await PostMessage.findByIdAndDelete(_id);
 res.json({message: "DELETED"});

   }


}

//NOW we THESE ROUTES WE CAN GO THE FRONT END AND INITIATE iT
//GO to api and export delete function
