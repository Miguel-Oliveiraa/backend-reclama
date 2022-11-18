// Configuração do projeto
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require("dotenv").config();

const app = express()

const PORT = process.env.PORT || 8080

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(PORT, ()=>{
    console.log("Running server")
})