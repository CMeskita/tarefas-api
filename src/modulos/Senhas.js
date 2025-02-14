import mongoose from "mongoose";

const senhasSchema=new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    codigo:{type:String},
    email:{type:String},    

},{versionKey:false});

const senhas=mongoose.model("senhas",senhasSchema);
export default senhas;