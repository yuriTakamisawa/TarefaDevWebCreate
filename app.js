const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const post = require("./models/post")

app.engine("handlebars",handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({extended: false}))
app.set(bodyParser.json())


app.get("/",function(req, res){
    res.render("primeira_pagina")
})

app.post("/cadastrar", function(req, res){
        post.create({
            nome: req.body.nome,
            telefone: req.body.telefone,
            origem: req.body.origem,
            dataContato: req.body.dataContato,
            observacao: req.body.observacao
        }).then(function(){
            res.send("Dados enviados com sucesso!")
        }).catch(function(erro){
            res.send("Falha ao cadastrar: " + erro)
        })
    })


app.listen(8081, function(){
    console.log("servidor ativo")
})

