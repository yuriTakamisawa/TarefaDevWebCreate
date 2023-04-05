const Sequelize = require("sequelize");
const Agendamentos = require("./post");
// os dois sequalizes são diferentes
// Instancia novo Sequelize
const sequelize = new Sequelize("test", "root","",{
    host: "localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(function(){
        console.log("Conectado com sucesso!")
    }).catch(function(erro){
        console.log("Falha ao conectar: " + erro)
    })

module.exports = {
    Sequelize : Sequelize,
    sequelize :sequelize,
}


