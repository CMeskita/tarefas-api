
import { createHash} from 'crypto'

export const chaveSecreta = "mangacomleitenaofazmal"

export function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex')
    }

