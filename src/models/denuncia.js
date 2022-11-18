const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Denuncia = new Schema({
    titulo: {
        type: String,
        required: true,
        default: false
    },
    tipo: {
        type: String,
        required: true,
        default: false
    },
    atendente_id: {
        type: Schema.Types.ObjectId,
        ref: "atendente",
        required: true,
    },
    cpf_usuario: {
        type: String,
        required: true,
        default: true
    },
    local: {
        type: String,
        required: true,
        default: true
    },
    finalizado: {
        type: Boolean,
        required: true,
        default: false
    },
    em_atendimento: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model("denuncia", Denuncia);
