import mongoose from "mongoose";

const usuarioSchema=new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    email:{type:String,required:true},
    nome:{type:String,required:true},
    senhaHas:{type:String},
    registro:{type:String},
    tenant:{type:Number},
    admin:{type:Boolean}

},{versionKey:false});

const usuarios=mongoose.model("usuarios",usuarioSchema);
export default usuarios;