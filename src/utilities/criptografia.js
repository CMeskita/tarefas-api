import { createCipheriv, randomBytes, createDecipheriv} from 'crypto'

export function Ecriptografa(tenant)
{
const chave = randomBytes(32);
const vi = randomBytes(16);
const cifra = createCipheriv('aes256', chave, vi);
const mensagemCifrada = cifra.update(tenant, 'utf-8', 'hex') + cifra.final('hex');

return mensagemCifrada;
}


// Decifrar a mensagem

export function Decriptogra(mensagemCifrada)
{
    const decifra = createDecipheriv('aes256', chave, vi);
    const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8')

    return mensagemDecifrada;
}




//console.log(`Decifrado: ${mensagemDecifrada.toString('utf-8')}`)