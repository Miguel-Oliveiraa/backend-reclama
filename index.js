// Configuração do projeto
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require("dotenv").config();

const app = express()

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//Conexão com o Mongo
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Roteamento
const atendenteRoutes = require("./src/routes/AtendenteRoutes")
const denunciaRoutes = require("./src/routes/DenunciaRoutes")

// Definindo as URLs 
app.use("/atendente", atendenteRoutes)
app.use("/denuncia", denunciaRoutes)

app.listen(PORT, ()=>{
    console.log("Running server")
})