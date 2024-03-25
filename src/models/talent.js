import { Schema, model } from "mongoose";

const TalentsSchema = new Schema({
    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    rg: {
        type: String,
        require: true,
        unique: true,
    },
    cpf: {
        type: String,
        require: true,
        unique: true,
    },
    telefone: {
        type: String,
        require: true,
    },
    estado: {
        type: String,
        require: true,
    },
    cidade: {
        type: String,
        require: true,
    },
    dataNascimento: {
        type: String,
        require: true,
    },
    img: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    stack: {
        type: String,
        require: true,
    },
});

const Talents = model("Talents", TalentsSchema);

export default Talents;