import mongoose from "mongoose";

const codigoSchema=new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    codigo:{type:String},
    tenant:{type:Number},    
    informacoes:{type:String},
    active:{type:Boolean}

},{versionKey:false});

const codigos=mongoose.model("codigos",codigoSchema);
export default codigos;