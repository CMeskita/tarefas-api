import tenant from "../modulos/Tenants.js";

class TenantController{

static async listarTenant(req,res)
    {
       try {
        const listarTenants= await tenant.find({});
        res.status(200).json(listarTenants);
       } catch (error) {
        res.status(500).json({message:`${error.message} - falha na Requisição`});
       }
    };
static async cadastraTenants(req,res)
   {
      const novaTenant=req.body;

      try {
   
         const tenantCriada=await tenant.create(novaTenant);
      res.status(201).json({messag:"criado com sucesso",tenant:tenantCriada});
      } catch (error) {
      res.status(500).json({message:`${error.message} - falha ao cadastrar o livro`});
      }
   };
static async tenantporDescricao(req,res)
   {
      const descricao=req.query.descricao;
      try {
         const tenantCompleto=await tenant.find({descricao:descricao});
         
         res.status(200).json(tenantCompleto);
      } catch (error) {
      res.status(500).json({message:`${error.message} - falha de requisição`});
      }
   }

}

export default TenantController;