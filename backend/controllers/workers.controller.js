const db = require("../models");
const Worker = db.workers;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  console.log("Llegó al create");
  if (!req.body.name || !req.body.sector) {
    return res.status(400).json({
      message: "Content cannot be empty!"
    });
  }

  const worker = {
    name: req.body.name,
    sector: req.body.sector,
    logo: req.file ? req.file.filename : ""
  }

  Worker.create(worker).then(data => {
    res.json(data);
  }).catch(err => {
    res.status(500).json({
      message: err.message || "Some error occurred while creating the worker"
    });
  });
};

exports.findAll = (req, res) => {
  Worker.findAll().then(data => {
    res.json(data);
  }).catch(err => {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving all workers" || req.body
    });
  });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  console.log("Datos recibidos en el servidor:", req.body);

  Worker.findByPk(id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: `Worker with id ${id} not found` });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: err.message || "Error retrieving worker with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  if (!req.body.name || !req.body.sector) {
    res.status(400).json({
      message: "Content cannot be empty!"
    });
    console.log("Datos de la solicitud recibidos en el servidor:", req.body);
    return;
  }

  Worker.findByPk(id)
    .then(worker => {
      if (!worker) {
        res.status(404).json({
          message: `Worker with id=${id} not found`
        });
      } else {
        const updatedWorker = {
          name: req.body.name,
          sector: req.body.sector,
          logo: req.file ? req.file.filename : worker.logo
        };

        worker.update(updatedWorker)
          .then(() => {
            res.json({
              message: "Worker was updated successfully."
            });
          })
          .catch(err => {
            res.status(500).json({
              message: err.message || `Error updating Worker with id=${id}`
            });
          });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: err.message || `Error retrieving Worker with id=${id}`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Worker.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.json({ message: "Worker was deleted successfully." });
      } else {
        res.status(404).json({ message: `Cannot delete worker with id=${id}. Worker not found.` });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: err.message || `Error deleting worker with id=${id}`
      });
    });
};
