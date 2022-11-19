const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const moment = require("moment")
const { v4 } = require("uuid")

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
        type: Number,
        required: true,
        default: false
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
    },
    data_denuncia: {
        type: String,
        required: true,
        default: moment().locale("pt-br").format('dddd, DD/MM/YYYY')
    },
    codigo: {
        type: String,
        required: true,
        default: v4()
    }
})



module.exports = mongoose.model("denuncia", Denuncia);
