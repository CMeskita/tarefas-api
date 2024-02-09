import mongoose,{mongo} from "mongoose";

async function DataBaseTarefas(){

mongoose.connect("mongodb+srv://daniellecmesquita:MeGtSKpKeucMdqRm@cluster0.9ck4koq.mongodb.net/tarefa?retryWrites=true&w=majority");
return mongoose.connection;

}

export default DataBaseTarefas;