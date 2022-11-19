const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CPF_Denuncia = new Schema({
    id_denuncia: {
        type: Schema.Types.ObjectId,
        ref: "denuncia",
        required: false,
    },
    cpf: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model("cpf_denuncia", CPF_Denuncia);
