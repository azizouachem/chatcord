const mongoose= require('mongoose')


const chatModel=mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
       },
       content:{type:dtring,trim:true},
       chat:{type: mongoose.Schema.Types.ObjectId,
        ref:"Chat"},

       },
       {
        timestamps:true,
       }
       );
       const Message=mongoose.model("Message",chatModel);
       module.exports = Message;