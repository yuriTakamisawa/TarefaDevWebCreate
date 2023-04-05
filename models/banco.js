const Sequelize = require("sequelize");
const Agendamentos = require("./post");
// os dois sequalizes são diferentes
// Instancia novo Sequelize
const sequelize = new Sequelize("test", "root","",{
    host: "localhost",
    dialect:"mysql"
})


module.exports = {
    Sequelize : Sequelize,
    sequelize :sequelize,
    Agendamentos: Agendamentos
}


// Agendamentos.create({
    
// })