const express = require("express");
const AtendenteController = require("../controllers/AtendenteController")
const AtendenteModel = require("../models/Atendente")
const router = express.Router();



router.post("/create", async (req, res)=> {
    try {
        const { nome, email, senha } = req.body; 
        const response = await AtendenteController.create( nome, email, senha )
        console.log(response)
        return res.status(response.status).json({message: response.message, status: response.status})
    } catch (error) {
        return res.status(400).json({message: error, error: 400})
}})

router.get("/find", async (req, res) => {
    try {
        const response = await AtendenteController.findall()
        return res.status(response.status).json({message: response.message, status: response.status})
    } catch (error) {
        return res.status(400).json({message: error, error: 400})
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, senha } = req.body;
        const result = await AtendenteController.login(email, senha);
        console.log(result)
        return res.status(result.status).json({message: result.message, status: result.status})
    } catch (error) {
        return res.status(400).json({message: error, error: 400})
    }
})

module.exports = router;
