import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
})
const Invoice = mongoose.models.invoice || mongoose.model('invoice',schema);

export default Invoice;