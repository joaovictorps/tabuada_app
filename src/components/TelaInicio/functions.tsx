export const gerarNumero = () => {
    return Math.floor(Math.random() * (10 + 1 - 1) + 1);
}

export const validarResposta = (numero1:number, numero2:number, respostaUsuario:number) => {
    const respostaCerta:number = numero1 * numero2;
    
    if(respostaUsuario ===respostaCerta) {
        return true;
    } else {
        return false
    }
}