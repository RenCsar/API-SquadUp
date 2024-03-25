import { Types } from "mongoose";
import Talents from "../models/talent.js";

export const validEmail = (req, res, next) => {
    const email = req.body.email;
    if (email && !email.includes("@")) {
        return res.status(422).send({ message: "Digite um e-mail válido!" });
    }
    next();
};

export const talentExist = async (req, res, next) => {
    const { email, rg, cpf } = req.body;

    const emailExist = await Talents.findOne({ email: email });

    if (emailExist) {
        return res.status(422).send({ message: "E-mail já cadastrado!" });
    }

    const rgExist = await Talents.findOne({ rg: rg });

    if (rgExist) {
        return res.status(422).send({ message: "RG já cadastrado!" });
    }

    const cpfExist = await Talents.findOne({ cpf: cpf });

    if (cpfExist) {
        return res.status(422).send({ message: "CPF já cadastrado!" });
    }

    next();
};

export const validId = (req, res, next) => {
    const id = req.params.id;

    if (!Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Id inválido!" });
    }

    next();
};

export const validUser = async (req, res, next) => {
    const id = req.params.id;

    const user = await findByIdRepository(id);

    if (!user) {
        return res.status(400).send({ message: "Usuário não encontrado!" });
    }

    req.id = id;
    req.user = user;

    next();
};