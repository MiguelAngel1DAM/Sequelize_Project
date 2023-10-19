module.exports = (sequelize, Sequelize) => {
    const Sector = sequelize.define("sector", {
        name: {
            type: Sequelize.STRING
        }
    });

    return Sector;
}