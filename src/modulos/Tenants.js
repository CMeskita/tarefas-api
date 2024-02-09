import mongoose from "mongoose";

const tenantSchema=new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    descricao:{type:String},
    tenant:{type:Number},

},{versionKey:false});

const tenant=mongoose.model("tenants",tenantSchema);
export default tenant;