import mongoose from 'mongoose';

const postSchema=new mongoose.Schema(
{
author:{

    type:mongoose.Schema.Types.ObjectId,
    ref:"User"

},
img:{
type:String,
required:true,

},
caption:{
    type:String
},

likes:[String],
comments:[
{
    user:{
        type:String
    },
    comment:{
        type:String,
    }
}

],

  createdAt: {
    type: Date,
    default: Date.now
  }


})

const Post=mongoose.model("Post",postSchema);

export default Post;