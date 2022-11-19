const express = require("express");
const DenunciaController = require("../controllers/DenunciaController")
const router = express.Router();

// Criar uma denuncia
router.post("/create", async (req, res)=> {
    try {
        const { titulo, descricao, tipo, cpf_usuario, endereco } = req.body;
        const result = await DenunciaController.create(titulo, descricao, tipo, cpf_usuario, endereco)
        return res.status(result.status).json({message: result.message, status: result.status})
    } catch (error) {
        return res.status(400).json({message: error, status: 400})
    }
})

// Buscar todas as denuncias
router.get("/find", async (req, res)=> {
    try {
        const result = await DenunciaController.find()
        return res.status(result.status).json({message: result.message, status: result.status})
    } catch (error) {
        return res.json({message: error, status: 400})
    }
})

// Buscar as denuncias de UM CPF
router.get("/search/:cpf", async (req, res) => {
    try {
        const cpf = req.params.cpf;
        const result = await DenunciaController.search(cpf)
        return res.json({message: result.message, status: result.status})
    } catch (error) {
        return res.status(400).json({message: error, status: 400})
    }
})

// Buscar uma denuncia pelo ID
router.get("/get/:id", async (req, res)=>{
    try {
        const denuncia_id = req.params.id;
        const result = await DenunciaController.findOne(denuncia_id)
        return res.status(result.status).json({message: result.message, status: result.status})
    } catch (error) {
        return res.status(400).json({message: error, status: 400})
    }
})

// Busca por status
router.get("/get/status/:status", async (req, res)=>{
    try {
        const status = req.params.status;
        const result = await DenunciaController.findStatus(status)
        return res.status(result.status).json({message: result.message, status: result.status})
    } catch (error) {
        return res.status(400).json({message: error, status: 400})
    }
})


// Busca por filtro
router.get("/get/filter/:filter", async (req, res) => {
    try {
        const filter = req.params.filter;
        const result = await DenunciaController.findFiltereds(filter)
        return res.json({message: result.message, status: result.status})
    } catch (error) {
        return res.status(400).json({message: error, status: 400})
    }
})

router.post("/get/code/:cpf", async (req, res) => {
    try {
        const { code } = req.body
        const cpf = req.params.cpf;
        const result = await DenunciaController.findByCode(code, cpf)
        return res.status(result.status).json({message: result.message, status: result.status})
    } catch (error) {
        return res.status(400).json({message: error, status: 400})
    }
})


module.exports = router;
