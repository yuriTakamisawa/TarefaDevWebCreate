const db = require("./banco");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Agendamentos = sequelize.define("agendamentos", {
  nome: {
    type: db.Sequelize.STRING
  },
  telefone: {
    type: db.Sequelize.INTEGER
  },
  origem: {
    type: db.Sequelize.STRING
  },
  dataContato: {
    type: db.Sequelize.DATE
  },
  observacao: {
    type: db.Sequelize.TEXT
  }
});

// Agendamentos.sync({force: true})

module.exports = Agendamentos;
