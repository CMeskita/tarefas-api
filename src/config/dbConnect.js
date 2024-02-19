import mongoose,{mongo} from "mongoose";
import 'dotenv/config'

async function DataBaseTarefas(){

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.9ck4koq.mongodb.net/tarefa?retryWrites=true&w=majority`);
return mongoose.connection;

}

export default DataBaseTarefas;