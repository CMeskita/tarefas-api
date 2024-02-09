
export function gerarNumeroAleatorio() {
    let numeroAleatorio = "";
    for (let i = 0; i < 9; i++) {
      numeroAleatorio += Math.floor(Math.random() * 10);
    }
    return numeroAleatorio;
  }
  
 
