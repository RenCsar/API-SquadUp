import Talents from "../models/talent.js";

export const createRepository = (body) => Talents.create(body);
export const findAllRepository = (offset, limit) =>
    Talents.find().sort({ _id: -1 }).skip(offset).limit(limit);
export const searchByEmailRepository = (email) => Talents.find({ email: email });
export const findBySectionRepository = (offset, limit, stack) =>
    Talents.find({ stack: stack })
        .sort({ _id: -1 })
        .skip(offset)
        .limit(limit);
export const updateRepository = ({ nome, email, rg, cpf, telefone, estado, cidade, dataNascimento, img, status, stack, id }) =>
    Talents.findOneAndUpdate(
        { _id: id },
        { nome, email, rg, cpf, telefone, estado, cidade, dataNascimento, img, status, stack },
        { rawResult: true }
    );

export const deleteByIdRepository = (id) => Talents.findOneAndDelete({ _id: id });
export const countTalents = () => Talents.countDocuments();