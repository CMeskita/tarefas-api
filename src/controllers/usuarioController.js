
import usuarios from "../modulos/Usuario.js";
import {chaveSecreta ,criaHash} from '../utilities/token.js';
import {gerarCodigos, gerarNumeroAleatorio} from '../utilities/gerarCodigo.js';
import jwt from 'jsonwebtoken';
import tenant from "../modulos/Tenants.js";
import sendEmail from '../utilities/emailService.js'; 
import senhas from "../modulos/Senhas.js";



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
            novoUsuario.senhaHas=criaHash(novoUsuario.senhaHas);
            novoUsuario.registro=new Date().toString();
            novoUsuario.tenant=numeroAleatorio;
            novoUsuario.admin=true;

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
static async cadastrarSenhas(req,res)
{        
         //const {email,nome,senhaHas,confirmsenhaHas,registro}=req.body;
         const novoSenha=req.body;
         
   try {
            
       const usuarioCriado = await usuarios.create(novoSenha);
       res.status(201).json({message:"criado com sucesso",usuarios:usuarioCriado});

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
   debugger;
   const {email,codigo,senhaHas}=req.body
   try {
      const userExists=await usuarios.find({email:email});
      if (!userExists) {
        return res.status(422).json({ msg: "O email Não Existe!" });
      }
      const senhaExists=await senhas.find({email:email,codigo:codigo});
      if (!senhaExists) {
        return res.status(422).json({ msg: "O código Não Existe!" });
      }
      const senhahas=criaHash(senhaHas);
      await usuarios.findOneAndUpdate({email:email},{senhaHas:senhahas});
      await senhas.findOneAndDelete({email:email,codigo:codigo});
      res.status(200).json({ msg: "Senha Alterada com sucesso!" });
 } catch (error) {
   res.status(500).json({ msg: error });
 }
}
static async recuperaSenhaUsuario(req,res)
{
  debugger;
  const {email}=req.body

  try {
    const userExists=await usuarios.find({email:email});
    if (!userExists) {
      return res.status(422).json({ msg: "O email Não Existe!" });
    }
    const senhaExists=await senhas.find({email:email});
      await senhas.findOneAndDelete({id:senhaExists.id});

    debugger;
    const cod = gerarCodigos();
    const subject = 'Recuperar Senha Cod:src';
    const text = `Seu código de recuperação é: ${cod}`;

 const senhaUsuario={email:email,codigo:cod};
 await senhas.create(senhaUsuario);
try {
   await sendEmail(email, subject, text);
   res.status(200).json({ msg: "Email enviado com sucesso! " + cod}); 
} catch (error) {
   
   res.status(500).json({ msg: "Email Não enviado! - Erro:" + error });
}


   
  } catch (error) {
    res.status(500).json({ msg: "Email Não enviado! - Erro:" + error });
  }
}
static async loginUsuario(req,res)
{ 
   const respose="";
  
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
         
            return res.status(404).json({ msg: "Usuário não encontrado!" });;
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
  

      res.status(200).json({token:token});
    } catch (error) {
      res.status(500).json({ msg: error });
    }
   }
}

export default UsuarioController;