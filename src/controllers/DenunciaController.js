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
    async findByCode(codigo, cpf){
        try {
            const Denuncia = await denuncia.findOne({ codigo })
            console.log(Denuncia)
            const updatedDenuncia = await denuncia.update({name: "subjacentes"}, {$push: {subjacentes: cpf}},  {new: true})
            console.log(updatedDenuncia)
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

    async search(cpf_usuario){
        try {
            const findCpfs = await denuncia.find({cpf_usuario}).populate("atendente_id");
            return {message: findCpfs, status: 200}

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
}