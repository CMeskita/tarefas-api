import mongoose from "mongoose";

const codigoSchema=new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    codigo:{type:String},
    tenant:{type:Number},    
    informacoes:{type:String},

},{versionKey:false});

const codigos=mongoose.model("codigos",codigoSchema);
export default codigos;