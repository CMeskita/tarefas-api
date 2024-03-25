import tarefas from "../modulos/Tarefas.js"


class TarefaController{

 static async listarTarefas(req,res)
    {
       try {
        const listarTarefas= await tarefas.find({active:true});
        res.status(200).json(listarTarefas);
       } catch (error) {
        res.status(500).json({message:`${error.message} - falha na Requisição`});
       }
};
static async listarTarefaId(req,res)
{
   try {
    const id=req.params.id;
    const getTarefa = await tarefas.findById(id);
    res.status(200).json(getTarefa);
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
      const tarefaporTenant=await tarefas.find({tenant:tenant}&&{active:true});
        
      res.status(200).json(tarefaporTenant);
   } catch (error) {
    res.status(500).json({message:`${error.message} - falha de requisição`});
   }
}
static async alterarTarefa(req,res)
{
   try {
    const id=req.params.id;
    await tarefas.findByIdAndUpdate(id,req.body);
    res.status(200).json({message:"tarefa atualizada"});
   } catch (error) {
    res.status(500).json({message:`${error.message} - falha na Requisição`});
   }
};
}

export default TarefaController;