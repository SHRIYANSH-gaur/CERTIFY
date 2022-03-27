///create schema and export model so that
//we can use it in our webapp
import mongoose from 'mongoose';
const postSchema= mongoose.Schema({
  title:String,
  message:String,
  creator:String,
  tags:[String],
  selectedFile: String,
createdAt:{
    type:Date,
    default: new Date()
  }
});
//remember the schema is a variable not a string
const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;
