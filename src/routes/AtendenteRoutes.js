const express = require("express");
const AtendenteController = require("../controllers/AtendenteController");
const DenunciaController = require("../controllers/DenunciaController")
const AtendenteModel = require("../models/Atendente");
const AtendenteAuth = require("../middlewares/AtendenteAuth");
const router = express.Router();

// Criar um atendente, rota exclusiva do admin/equipe de TI 
router.post("/create", async (req, res)=> {
    try {
        const { nome, cpf, senha } = req.body; 
        const response = await AtendenteController.create( nome, cpf, senha )
        return res.status(response.status).json({message: response.message, status: response.status})
    } catch (error) {
        return res.status(400).json({message: error, error: 400})
}})

// Buscar todos os atendentes
router.get("/find", async (req, res) => {
    try {
        const response = await AtendenteController.findall()
        return res.status(response.status).json({message: response.message, status: response.status})
    } catch (error) {
        return res.status(400).json({message: error, error: 400})
    }
})

// Login do atendente
router.post("/login", async (req, res) => {
    try {
        const { cpf, senha } = req.body;
        const result = await AtendenteController.login(cpf, senha);
        return res.status(result.status).json({message: result.message, status: result.status})
    } catch (error) {
        return res.status(400).json({message: error, error: 400})
    }
})

// Responder uma denuncia
router.put("/responder", AtendenteAuth, async(req, res)=>{
    try {
        const {id_denuncia, comentario } = req.body;
        const id_atendente = req.user_id;
        const result = await DenunciaController.update(id_denuncia, comentario, id_atendente);
        return res.status(result.status).json({message: result.message, status: result.status})
    } catch (error) {
        return res.status(400).json({message: error, error: 400})
    }
})

// Alterar o status de uma denuncia
router.put("/alterar/status/:id", AtendenteAuth, async(req, res)=> {
    try {
        const { status } = req.body;
        const id_denuncia = req.params.id;
        const result = await DenunciaController.alterStatus(id_denuncia, status);
        return res.status(result.status).json({message: result.message, status: result.status})
    } catch (error) {
        return res.status(400).json({message: error, error: 400})
    }
})

module.exports = router;
