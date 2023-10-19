const db = require("../models");
const Sector = db.sectors;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "El campo no puede estar vacio"
        });
        return;
    }

    const sector = {
        name: req.body.name
    };
    
    Sector.create(sector).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Ha habido un error al crear el sector"
        });
    });
};

exports.findAll = (req, res) => {
    Sector.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
        err.message || "Ha habido un error al conseguir la informacion de la base de datos"
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Sector.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar el Sector"
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Sector.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sector actualizado correctamente."
                });
            } else {
                res.send({
                    message: "No se puede actualizar el Sector"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar el Sector"
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Sector.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sector eliminado correctamente."
                });
            } else {
                res.send({
                    message: "No se puede eliminar el Sector"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el Sector"
            });
        });
};
