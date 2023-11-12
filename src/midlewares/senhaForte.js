
const verificaSenha = (req, res, next)=>{
    const senha = req.body.senha

    if(senha.length < 8){
        res.status(400).json(
            {"mensage":"Senha pequena informe outra"}
        )
        next()
    }else{
        let pontos = 0;
        const letrasMaiusculasComAcento = 
       ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
        'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
        'W', 'X', 'Y', 'Z', 'Á', 'É', 'Í', 'Ó', 'Ú', 'À', 'È', 
        'Ì', 'Ò', 'Ù', 'Â', 'Ê', 'Î', 'Ô', 'Û', 'Ã', 'Õ', 'Ç',];
        const numeros = [1,2,3,4,5,6,7,8,9,0];

        for(let c = 0; letrasMaiusculasComAcento.length>c;c++){
            let breakExterno = false;
            for(let a = 0; a<senha.length;a++){
                let letra = letrasMaiusculasComAcento[c];
                if(letra == senha[a]){
                    pontos += 10;
                    break;
                    breakExterno = true;
                }
            }
            if(breakExterno = true){
                break;
            }
        };

        for(let c = 0; letrasMaiusculasComAcento.length>c;c++){
            let breakExterno = false;
            for(let a = 0; a<senha.length;a++){
                let letra = letrasMaiusculasComAcento[c];
                if(letra.toLocaleLowerCase == senha[a]){
                    pontos += 10;
                    break;
                    breakExterno = true;
                }
            }
            if(breakExterno = true){
                break;
            }
        };
        for(let c = 0; numeros.length>c;c++){
            let breakExterno = false;
            for(let a = 0; a<senha.length;a++){
                let numero = numeros[c];
                if(numero == senha[a]){
                    pontos += 10;
                    break;
                    breakExterno = true;
                }
            }
            if(breakExterno = true){
                break;
            }
        };
        for(let a = 0; a<senha.length;a++){
            let tamanho = senha.length-1;
            for(let b = 0; a<senha.length;a++){
                let numero = numeros[c];
                if(numero == senha[b]){
                    pontos += 1;
                    b++;
                }else if((b==tamanho)&&(numero!=senha[b])){
                    pontos+=2;
                }

            }
        };
    }
    console.log(senha)
    next();

};

export default verificaSenha;

// Verificar se a senha possui pelo menos 08 caracteres.
// Verificar se a senha contém pelo menos uma letra maiúscula.
// Verificar se a senha contém pelo menos uma letra minúscula.
// Verificar se a senha contém pelo menos um dígito numérico.
// Verificar se a senha contém pelo menos um caractere especial (e.g, !@#$%).
