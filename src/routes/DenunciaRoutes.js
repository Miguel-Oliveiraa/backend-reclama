const express = require("express");
const DenunciaController = require("../controllers/DenunciaController")
const router = express.Router();

// Rotas de user 
router.post("/create", async (req, res)=> {
    try {
        
    } catch (error) {
        return res.json({message: error, status: 400})
    }
})

router.get("/find", async (req, res)=> {
    try {
        
    } catch (error) {
        return res.json({message: error, status: 400})
    }
})

router.get("/search/:cpf", async (req, res) => {
    try {
        const cpf = req.params.cpf;
        const result = await DenunciaController.search(cpf)
        return res.json({message: result.message, status: result.status})
    } catch (error) {
        return res.json({message: error, status: 400})
    }
})


// Rotas de atendente
router.get("/filterby/:filter", (req, res) => {
    try {
        const filter = req.params.filter;
        const result = DenunciaController.findFiltereds(filter)

        return res.json({message: result.message, status: result.status})
    } catch (error) {
        return res.json({message: error, status: 400})
    }
})
module.exports = router;
