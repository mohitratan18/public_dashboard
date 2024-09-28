const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})
const user = mongoose.models.User || mongoose.model("User",schema);
export default user;