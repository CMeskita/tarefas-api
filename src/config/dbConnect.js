import mongoose from "mongoose";
import "dotenv/config";

async function DataBaseTarefas() {
  try {
    const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.9ck4koq.mongodb.net/tarefa?retryWrites=true&w=majority`;

    await mongoose.connect(uri);

    console.log("MongoDB conectado com sucesso");

    return mongoose.connection;
  } catch (error) {
    console.error("Erro ao conectar no MongoDB ", error);
    process.exit(1);
  }
}

export default DataBaseTarefas;
