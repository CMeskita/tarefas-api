import mongoose from "mongoose";

const tarefaSchema=new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    descricao:{type:String,required:true},
    seg:{type:Boolean},
    ter:{type:Boolean},
    qua:{type:Boolean},
    qui:{type:Boolean},
    sex:{type:Boolean},
    sab:{type:Boolean},
    dom:{type:Boolean},
    tenant:{type:Number},

},{versionKey:false});

const tarefa=mongoose.model("tarefas",tarefaSchema);
export default tarefa;