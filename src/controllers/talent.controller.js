import { findAllService } from "../services/talent.service.js";

export const create = async (req, res) => {
    try {
        // req.body.userId = req.userId;

        // await createService(req.body);


        res.status(201).send({ message: "Talento criado com sucesso!" })
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

        const talent = "await findByEmailServices(req.talent)"

        res.status(200).send(talent)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const findByStack = async (req, res) => {
    try {

        const talent = "await findByStackServices(req.stack)"

        res.status(200).send(talent)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const deleteById = async (req, res) => {
    try {
        const id = "req.TalentId";

        //await deleteByIdService(id);

        return res.status(200).send({ messege: "Talento deletado com sucesso!" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        // const body = {
        //     nome: req.body.nome,
        //     subtitle: req.body.subtitle,
        //     text: req.body.text,
        //     category: req.body.category,
        //     banner: req.body.banner,
        //     postId: req.postId,
        // };
        // await updateService(body);

        return res
            .status(200)
            .send({ messege: "Talento atualizado com sucesso!" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};