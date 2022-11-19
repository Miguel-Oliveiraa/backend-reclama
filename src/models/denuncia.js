const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const moment = require("moment")
const { v4 } = require("uuid")
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
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
    },
    data_denuncia: {
        type: String,
        required: true,
        default: moment().locale("pt-br").format('dddd, DD/MM/YYYY')
    },
    codigo: {
        type: Number,
        required: true,
        default: getRandomIntInclusive(111111,999999)
    },
    subjacentes: {
        type: Array,
        required: false
    }
})



module.exports = mongoose.model("denuncia", Denuncia);
