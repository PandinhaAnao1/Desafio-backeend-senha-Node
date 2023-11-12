import Express  from "express";
import verificaSenha from "../midlewares/senhaForte.js";
const router = Express.Router();

router.post('/cadastros',verificaSenha,(req, res)=>{
    res.status(200)
});

export default router;

// Verificar se a senha possui pelo menos 08 caracteres.
// Verificar se a senha contém pelo menos uma letra maiúscula.
// Verificar se a senha contém pelo menos uma letra minúscula.
// Verificar se a senha contém pelo menos um dígito numérico.
// Verificar se a senha contém pelo menos um caractere especial (e.g, !@#$%).