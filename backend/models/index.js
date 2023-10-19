const dbconfig = require ("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbconfig.max,
        min: dbconfig.min,
        acquire: dbconfig.acquire,
        idle: dbconfig.idle
    }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sectors = require("./sector.model.js")(sequelize, Sequelize);
db.workers = require("./worker.model.js")(sequelize, Sequelize);

module.exports = db;
