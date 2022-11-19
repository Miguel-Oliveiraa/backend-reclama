const Atendente = require("../models/Atendente")
const bcript = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/auth");

module.exports = {
    async create(nome, email, senha){
        try {
            const newAtendente = await Atendente.create({
                nome, 
                email, 
                senha: bcript.hashSync(senha, 8)
            })
            return {message: newAtendente, status: 200}
        } catch (error) {
            return {message: error, status: 400}
        }
    },
    async findall(){
        try {
            const atendentes = await Atendente.find()
            return {message: atendentes, status: 200}
        } catch (error) {
            return {message: error, status: 400}
        }
    },
    async login(email, senha){
        try {
            const foundAtendente = await Atendente.findOne({email})
            if(!foundAtendente){
                return {message: "Email não encontrado", status: 400}
            }else{
                const passwordMatch = await bcript.compare(
                    senha,
                    foundAtendente.senha
                );

                if (!passwordMatch) {
                    return {
                        message: "Credenciais fornecidas inválidas",
                        status: 400,
                    };
                } else {
                    const token = jwt.sign({ id: foundAtendente._id }, config.secret, {
                        expiresIn: 86400,
                    });
                    return { message: token, status: 200 };
                }
            }
        } catch (error) {
            return {message: error, status: 400}
        }
    }
}