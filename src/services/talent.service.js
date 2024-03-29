import { countTalents, createRepository, deleteByIdRepository, findAllRepository, searchByEmailRepository, searchByStackRepository, updateRepository } from "../repositories/talent.repositories.js";

export const createService = async (body) => {
    try {
        const { nome, email, rg, cpf, telefone, estado, cidade, dataNascimento, img, status, stack } = body;

        if (!nome || !email || !rg || !cpf || !telefone || !estado || !cidade || !dataNascimento || !img || !status || !stack)
            throw new Error("Por favor, preencha todos os requisitos do formulário!");

        return await createRepository(body);
    } catch (error) {
        throw new Error(error.message);;
    }
};

export const findAllService = async (body) => {
    try {
        let { limit, offset, baseUrl } = body;

        limit = Number(limit);
        offset = Number(offset);

        if (!limit) {
            limit = 5;
        }

        if (!offset) {
            offset = 0;
        }

        const talents = await findAllRepository(offset, limit);
        const total = await countTalents();
        const currentUrl = baseUrl;

        const next = offset + limit;
        const nextUrl =
            next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

        const previuos = offset - limit < 0 ? null : offset - limit;
        const previuosUrl =
            previuos != null
                ? `${currentUrl}?limit=${limit}&offset=${previuos}`
                : null;

        if (talents.length === 0) throw new Error("Nenhum Talento registrado!");

        return {
            nextUrl,
            previuosUrl,
            limit,
            offset,
            total,

            results: talents.map((item) => ({
                id: item._id,
                nome: item.nome,
                img: item.img,
                email: item.email,
                rg: item.rg,
                cpf: item.cpf,
                telefone: item.telefone,
                estado: item.estado,
                cidade: item.cidade,
                dataNascimento: item.dataNascimento,
                status: item.status,
                stack: item.stack,
            })),
        };
    } catch (error) {
        throw new Error(error.message);;
    }
};

export const findByEmailService = async (body) => {
    try {
        let { limit, offset, baseUrl, email } = body;

        limit = Number(limit);
        offset = Number(offset);

        if (!limit) {
            limit = 5;
        }

        if (!offset) {
            offset = 0;
        }

        const talent = await searchByEmailRepository(offset, limit, email);
        const total = talent.length;
        const currentUrl = baseUrl;

        const next = offset + limit;
        const nextUrl =
            next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

        const previuos = offset - limit < 0 ? null : offset - limit;
        const previuosUrl =
            previuos != null
                ? `${currentUrl}?limit=${limit}&offset=${previuos}`
                : null;

        if (talent.length === 0) throw new Error("Não existe nenhum Talento com esse email!");

        return {
            nextUrl,
            previuosUrl,
            limit,
            offset,
            total,

            results: talent.map((item) => ({
                id: item._id,
                nome: item.nome,
                img: item.img,
                email: item.email,
                rg: item.rg,
                cpf: item.cpf,
                telefone: item.telefone,
                estado: item.estado,
                cidade: item.cidade,
                dataNascimento: item.dataNascimento,
                status: item.status,
                stack: item.stack,
            })),
        };
    } catch (error) {
        throw new Error(error.message);;
    }
};

export const findByStackService = async (body) => {
    try {
        let { limit, offset, baseUrl, stack } = body;

        limit = Number(limit);
        offset = Number(offset);

        if (!limit) {
            limit = 5;
        }

        if (!offset) {
            offset = 0;
        }

        const talent = await searchByStackRepository(offset, limit, stack);
        const total = talent.length;
        const currentUrl = baseUrl;

        const next = offset + limit;
        const nextUrl =
            next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

        const previuos = offset - limit < 0 ? null : offset - limit;
        const previuosUrl =
            previuos != null
                ? `${currentUrl}?limit=${limit}&offset=${previuos}`
                : null;

        if (talent.length === 0) throw new Error("Não existe nenhum Talento com essa Stack!");

        return {
            nextUrl,
            previuosUrl,
            limit,
            offset,
            total,

            results: talent.map((item) => ({
                id: item._id,
                nome: item.nome,
                img: item.img,
                email: item.email,
                rg: item.rg,
                cpf: item.cpf,
                telefone: item.telefone,
                estado: item.estado,
                cidade: item.cidade,
                dataNascimento: item.dataNascimento,
                status: item.status,
                stack: item.stack,
            })),
        };
    } catch (error) {
        throw new Error(error.message);;
    }
};

export const deleteByIdService = async (id) => {
    try {
        return await deleteByIdRepository(id);
    } catch (error) {
        throw new Error(error.message);;
    }
};

export const updateService = async (body) => {
    try {
        const { nome, email, rg, cpf, telefone, estado, cidade, dataNascimento, img, status, stack } = body;

        if (!nome || !email || !rg || !cpf || !telefone || !estado || !cidade || !dataNascimento || !img || !status || !stack)
            throw new Error(
                "Por favor, preencha pelo menos um requisito do formulário!"
            );

        return await updateRepository(body);
    } catch (error) {
        throw new Error(error.message);;
    }
};