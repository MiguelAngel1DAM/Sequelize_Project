module.exports = (sequelize, Sequelize) => {
    const worker = sequelize.define("workers", {
      name: {
        type: Sequelize.STRING
      },
      sector: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      }
    });
  
    return worker;
  }