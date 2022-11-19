const denuncia = require("../models/denuncia")

module.exports = {
    async create(titulo, descricao, tipo, cpf_usuario, endereco){
        try {
            const newDenuncia = await denuncia.create({titulo, descricao, tipo, cpf_usuario, endereco})
            return {message: newDenuncia, status: 200}
        } catch (error) {
            return {message: error, status: 400}
        }
    },

    async findFiltereds(filtro){
        try {
            const filteredDenuncias = await denuncia.find({ tipo: filtro })
            return {message: filteredDenuncias, status: 200}
        } catch (error) {
            return {message: error, status:400}
        }
    },
    
    async findOne(denuncia_id){
        try {
            const findOne = await denuncia.findById({_id: denuncia_id})
            
            return {message: findOne, status: 200}
        } catch (error) {
            return {message: error, status:400}
        } 
    },

    async find(){
        try {
            const findAll = await denuncia.find()
            return {message: findAll, status: 200}
        } catch (error) {
            return {message: error, status:400}
        }
    },

    async search(cpf_usuario){
        try {
            const findCpfs = await denuncia.find({cpf_usuario})
            return {message: findCpfs, status: 200}

        } catch (error) {
            return {message: error, status:400}
        }
    },

    async update(id_denuncia, comentario, id_atendente){
        try {
            const foundDenuncia = await denuncia.findByIdAndUpdate(id_denuncia, {
                comentario,
                id_atendente
            }, { new: true })
            return {message: foundDenuncia, status: 200}
        } catch (error) {
            return {message: error, status:400}
        }
    },

    async alterStatus(id_denuncia, status){
        try {
            const foundDenuncia = await denuncia.findByIdAndUpdate(id_denuncia, {
                status
            }, { new: true })
            return {message: foundDenuncia, status: 200}
        } catch (error) {
            return {message: error, status:400}
        } 
    },
    
    async findStatus(status){
        try {
            const foundDenuncia = await denuncia.find({ status })
            return {message: foundDenuncia, status: 200}
        } catch (error) {
            return {message: error, status:400}
        } 
    },
}