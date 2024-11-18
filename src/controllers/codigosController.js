import codigos from "../modulos/Codigos.js";
class CodigosController{

static async listarcodigos(req,res)
    {
       try {
        const listarCodigos= await codigos.find({});
        res.status(200).json(listarCodigos);
       } catch (error) {
        res.status(500).json({message:`${error.message} - falha na Requisição`});
       }
};
static async listarCodigoId(req,res)
{
   try {
    const id=req.params.id;
    const getCodigo = await codigos.findById(id);
    res.status(200).json(getCodigo);
   } catch (error) {
    res.status(500).json({message:`${error.message} - falha na Requisição`});
   }
};

static async cadastrarCodigo(req,res)
{    debugger;    

   try {
      
      const novoCodigo=req.body;
      const codigoCriado = await codigos.create(novoCodigo)
          
        res.status(201).json({message:"criado com sucesso",codigo:codigoCriado.codigo});

   } catch (error) {
    res.status(500).json({message:`${error.message} - falha ao cadastrar o Código`});
   }       
};

}

export default CodigosController;