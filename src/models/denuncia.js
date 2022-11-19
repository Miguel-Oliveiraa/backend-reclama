const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Denuncia = new Schema({
    titulo: {
        type: String,
        required: true,
        default: false
    },
    descricao: {
        type: String,
        required: false,
        default: false
    },
    tipo: {
        type: String,
        required: true,
        default: false
    },
    cpf_usuario: {
        type: String,
        required: true,
        default: true
    },
    atendente_id: {
        type: Schema.Types.ObjectId,
        ref: "atendente",
        required: false,
    },
    comentario: {
        type: String,
        required: false,
        default: ""
    },
    status: {
        type: Number,
        required: true,
        default: 0
    },
    endereco: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("denuncia", Denuncia);
