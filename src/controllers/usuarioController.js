
import usuarios from "../modulos/Usuario.js";
import {chaveSecreta ,criaHash} from '../utilities/token.js';
import {gerarNumeroAleatorio} from '../utilities/gerarCodigo.js';
import jwt from 'jsonwebtoken';
import * as bcrypt  from 'bcrypt';
import tenant from "../modulos/Tenants.js";

class UsuarioController{

static async listarUsuario(req,res)
    {
       try {
        const listarUsuarios= await usuarios.find({});
        res.status(200).json(listarUsuarios);
       } catch (error) {
        res.status(500).json({message:`${error.message} - falha na Requisição`});
       }
};
static async listarUsuarioId(req,res)
{
   try {
    const id=req.params.id;
    const getUsuario = await usuarios.findById(id);
    res.status(200).json(getUsuario);
   } catch (error) {
    res.status(500).json({message:`${error.message} - falha na Requisição`});
   }
};
static async usuarioporEmail(req,res)
{
   const email=req.query.email;
   try {
      const usuarioporEmail=await usuarios.find({email:email});
        
      res.status(200).json(usuarioporEmail);
   } catch (error) {
    res.status(500).json({message:`${error.message} - falha de requisição`});
   }
}
static async cadastrarUsuarioCompartilhado(req,res)
{        
         const novoUsuario=req.body;
   try {
      if (novoUsuario.senhaHas != novoUsuario.confirmsenhaHas) {
         return res
           .status(422)
           .json({ message: "A senha e a confirmação precisam ser iguais!" });
       }
       novoUsuario.senhaHas=criaHash(novoUsuario.senhaHas);
       novoUsuario.registro=new Date().toString();
      const usuarioCriado = await usuarios.create(novoUsuario);
        res.status(201).json({message:"criado com sucesso",usuarios:usuarioCriado});

   } catch (error) {
    res.status(500).json({message:`${error.message} - falha ao cadastrar o Usuário`});
   }
       
};
static async cadastrarUsuario(req,res)
{        
         //const {email,nome,senhaHas,confirmsenhaHas,registro}=req.body;
         const novoUsuario=req.body;
         let numeroAleatorio=gerarNumeroAleatorio();
   try {
      const usuarioExiste = await usuarios.findOne(novoUsuario.email)
         if (usuarioExiste) {
            return res.status(409).json({ msg: "Usuário já Cadastrado!" });
         }
      if (novoUsuario.senhaHas != novoUsuario.confirmsenhaHas) {
         return res
           .status(422)
           .json({ message: "A senha e a confirmação precisam ser iguais!" });
       }
       novoUsuario.senhaHas=criaHash(novoUsuario.senhaHas);
       novoUsuario.registro=new Date().toString();
       novoUsuario.tenant=numeroAleatorio;
       const usuarioCriado = await usuarios.create(novoUsuario);

         const novoTenant=new tenant({
         descricao:criaHash(numeroAleatorio.toString()),
         tenant:numeroAleatorio
     })
     const tenantCriado = await tenant.create(novoTenant);
     
     
        res.status(201).json({message:"criado com sucesso",usuarios:usuarioCriado,tenant:tenantCriado});

   } catch (error) {
    res.status(500).json({message:`${error.message} - falha ao cadastrar o Usuário`});
   }
    
    
};
static async alterarUsuario(req,res)
{
   try {
    const id=req.params.id;
    await usuarios.findByIdAndUpdate(id,req.body);
    res.status(200).json({message:"usuário atualizado"});
   } catch (error) {
    res.status(500).json({message:`${error.message} - falha na Requisição`});
   }
};
static async reseteSenhaUsuario(req,res)
{
   const {email, password, confirmpassword } = req.body;
   if (!email) {
      return res.status(422).json({ msg: "O email é obrigatório!" });
    }
    if (!password) {
      return res.status(422).json({ msg: "A senha é obrigatória!" });
    }
    if (password != confirmpassword) {
      return res.status(422).json({ msg: "A senha e a confirmação precisam ser iguais!" });
    }
    const userExists = await User.findOne({ email: email });
    const passwordHash = await criaHash(password);

  try {
   await usuarios.save();

   res.status(201).json({ msg: "Usuário criado com sucesso!" });
 } catch (error) {
   res.status(500).json({ msg: error });
 }
}
static async loginUsuario(req,res)
{ 
  
   const {senhaHas, email}=req.body
         if (!email) {
            return res.status(422).json({ msg: "O email é obrigatório!" });
         }
      
         if (!senhaHas) {
            return res.status(422).json({ msg: "A senha é obrigatória!" });
         }
   const senhahas=criaHash(senhaHas);
   const usuarioExiste = await usuarios.findOne({email:email})
         if (!usuarioExiste) {
            return res.status(404).json({ msg: "Usuário não encontrado!" });
         }

         if (senhahas!=usuarioExiste.senhaHas) {
            return res.status(422).json({ msg: "Senha inválida" });
         }
    try {
      const token = jwt.sign(
         {
             email: usuarioExiste.email,
             nome: usuarioExiste.nome,
             tenant:usuarioExiste.tenant
         
         }, chaveSecreta
     );  
     usuarioExiste.token=token;

      res.status(200).json({token:token });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
   }
}

export default UsuarioController;