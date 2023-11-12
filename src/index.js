import Express  from "express";
import router from "./routes/cadastro.js";
const app = Express();



app.use(Express.json());
app.use(router)


app.listen(3000,()=>{
    console.log("Estou ovindo na porta 3000!")
});