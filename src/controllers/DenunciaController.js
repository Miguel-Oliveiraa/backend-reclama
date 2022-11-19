const denuncia = require("../models/denuncia")
const cpf_denuncia = require("../models/CPF_Denuncia")

module.exports = {
    async create(titulo, descricao, tipo, cpf, endereco){
        try {
            const newDenuncia = await denuncia.create({titulo, descricao, tipo, endereco})
            const cpf_den = await cpf_denuncia.create({id_denuncia: newDenuncia._id, cpf })
            return {message: newDenuncia, status: 200}
        } catch (error) {
            return {message: error, status: 400}
        }
    },
    async findByCode(codigo, cpf){
        try {
            const Denuncia = await denuncia.findOne({ codigo })

            const cpf_den = await cpf_denuncia.create({ id_denuncia: Denuncia._id, cpf})

            return {message: Denuncia, status: 200}
        } catch (error) {
            return {message: error, status: 400}
        }
    },

    async findFiltereds(filtro){
        try {
            const filteredDenuncias = await denuncia.find({ tipo: filtro }).populate("atendente_id");
            return {message: filteredDenuncias, status: 200}
        } catch (error) {
            return {message: error, status:400}
        }
    },
    
    async findOne(denuncia_id){
        try {
            const findOne = await denuncia.findById({_id: denuncia_id}).populate("atendente_id");
            
            return {message: findOne, status: 200}
        } catch (error) {
            return {message: error, status:400}
        } 
    },

    async find(){
        try {
            const findAll = await denuncia.find().populate("atendente_id");
            return {message: findAll, status: 200}
        } catch (error) {
            return {message: error, status:400}
        }
    },

    async search(cpf){
        try {
            const denuncias = await cpf_denuncia.find({ cpf }).populate("id_denuncia");
            
            return {message: denuncias, status: 200}
        } catch (error) {
            return {message: error, status:400}
        }
    },

    async update(id_denuncia, comentario, atendente_id){
        try {
            const foundDenuncia = await denuncia.findByIdAndUpdate(id_denuncia, {
                comentario,
                atendente_id 
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
            const foundDenuncia = await denuncia.find({ status }).populate("atendente_id");
            return {message: foundDenuncia, status: 200}
        } catch (error) {
            return {message: error, status:400}
        } 
    },

    async denuncia_cpf(id_denuncia, cpf){
        try {
            const cpf_denuncia = await cpf_denuncia.create({ id_denuncia, cpf})
            return {message: cpf_denuncia, status: 200}
        } catch (error) {
            return {message: error, status:400}
        } 
    }
}