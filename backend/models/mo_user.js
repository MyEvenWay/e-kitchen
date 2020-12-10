const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  firstname:{
    type:String,
    required:true,
    
  },
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  candidateType:Array,
  imageURL:String
},{
  timestamps:true
})

const User = mongoose.model("User", userSchema)

module.exports = User