const denuncia = require("../models/denuncia")

module.exports = {
    async create(titulo, descricao, tipo, cpf_usuario){
        try {
            const newDenuncia = await denuncia.create(titulo, descricao, cpf_user)
            return res.json({message: newDenuncia, status: 200})
        } catch (error) {
            return {message: error, status: 400}
        }
    },

    async findFiltereds(filtro){
        try {
            const filteredDenuncias = await denuncia.find({ filtro })
            return res.json({message: filteredDenuncias, status: 200})
        } catch (error) {
            return {message: error, status:400}
        }
    },

    async find(){
        try {
            const findAll = await denuncia.find()
            return res.json({message: findAll, status: 200})
        } catch (error) {
            return {message: error, status:400}
        }
    },

    async search(cpf_usuario){
        try {
            const findCpfs = await denuncia.find({cpf_usuario})
        } catch (error) {
            return {message: error, status:400}
        }
    }
}