import { createService, deleteByIdService, findAllService, findByEmailService, findByStackService, updateService } from "../services/talent.service.js";

export const create = async (req, res) => {
    try {
        const user = await createService(req.body);
        res.status(201).send({
            message: "Talento cadastrado com sucesso!",
            user: {
                id: user._id,
                ...req.body
            },
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const findAll = async (req, res) => {
    try {
        const body = {
            limit: req.query.limit,
            offset: req.query.offset,
            baseUrl: req.baseUrl,
        };

        const talents = await findAllService(body);

        res.status(200).send(talents)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }


};

export const findByEmail = async (req, res) => {
    try {
        const body = {
            limit: req.query.limit,
            offset: req.query.offset,
            email: req.params.email,
            baseUrl: req.baseUrl,
        };

        const talent = await findByEmailService(body);

        res.status(200).send(talent)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const findByStack = async (req, res) => {
    try {
        const body = {
            limit: req.query.limit,
            offset: req.query.offset,
            stack: req.params.stack,
            baseUrl: req.baseUrl,
        };

        const talent = await findByStackService(body)

        res.status(200).send(talent)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const deleteById = async (req, res) => {
    try {
        const id = req.id;
        await deleteByIdService(id);
        return res.status(200).send({ messege: "Talento deletado com sucesso!" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        req.body.id = req.id;

        await updateService(req.body);

        res.status(201).send({ messege: "Talento atualizado com sucesso!" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};