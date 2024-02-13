import tarefas from "../modulos/Tarefas.js"
import tenants from "../modulos/Tenants.js"

class TarefaController{

 static async listarTarefas(req,res)
    {
       try {
        const listarTarefas= await tarefas.find({});
        res.status(200).json(listarTarefas);
       } catch (error) {
        res.status(500).json({message:`${error.message} - falha na Requisição`});
       }
    };
    
static async cadastraTarefas(req,res)
{
   const novaTarefa=req.body;

   try {
 
      const tarefaCriada=await tarefas.create(novaTarefa);
    res.status(201).json({messag:"criado com sucesso",tarefas:tarefaCriada});
   } catch (error) {
    res.status(500).json({message:`${error.message} - falha ao cadastrar o livro`});
   }
};
static async tarefaporTenant(req,res)
{
   const tenant=req.query.tenant;
   try {
      //const tenantExiste=await tenants.find({descricao:descricao});
      const tarefaporTenant=await tarefas.find({tenant:tenant});
        
      res.status(200).json(tarefaporTenant);
   } catch (error) {
    res.status(500).json({message:`${error.message} - falha de requisição`});
   }
}

}

export default TarefaController;