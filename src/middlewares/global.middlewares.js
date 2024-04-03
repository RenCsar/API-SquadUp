import { Types } from "mongoose";
import Talents from "../models/talent.js";
import { findTalentByIdRepository } from "../repositories/talent.repositories.js";

export const validEmail = (req, res, next) => {
    const email = req.body.email;
    if (email && !email.includes("@")) {
        return res.status(422).send({ message: "Digite um e-mail válido!" });
    }
    next();
};

export const talentExist = async (req, res, next) => {
    const { email, rg, cpf } = req.body;
    const id = req.params.id;

    const existingTalent = await Talents.findOne({
        $or: [
            { email },
            { rg },
            { cpf }
        ]
    });

    if (existingTalent) {
        if (id && String(existingTalent._id) === id) {
            // Se o talento existe, mas o ID corresponde ao ID atual, continue para a próxima etapa.
            next();
        } else {
            // Se o talento existe e o ID não corresponde, envie a mensagem apropriada.
            let message;
            if (existingTalent.email === email) {
                message = "E-mail já cadastrado!";
            } else if (existingTalent.rg === rg) {
                message = "RG já cadastrado!";
            } else if (existingTalent.cpf === cpf) {
                message = "CPF já cadastrado!";
            }
            return res.status(422).send({ message });
        }
    } else {
        // Se não há talento existente, continue para a próxima etapa.
        next();
    }
};

export const validId = (req, res, next) => {
    const id = req.params.id;

    if (!Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Id inválido!" });
    }

    next();
};

export const checkTalentCreationDate = async (req, res, next) => {
    const id = req.params.id;

    const talent = await findTalentByIdRepository(id);

    const dataFixa = new Date("2024-04-01");

    if (talent._id.getTimestamp() < dataFixa) {
        return res.status(403).json({ message: 'Você não tem autorização para alterar os registros antigos!' });
    }

    next();
}

export const validUser = async (req, res, next) => {
    const id = req.params.id;

    const user = await findTalentByIdRepository(id);

    if (!user) {
        return res.status(400).send({ message: "Talento não encontrado!" });
    }

    req.id = id;
    req.user = user;

    next();
};