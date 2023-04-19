const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const post = require("./models/post")
const Agendamentos = require("./models/post")




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
            res.redirect("/")
        }).catch(function(erro){
            res.send("Falha ao cadastrar: " + erro)
        })
    })

app.get("/consulta", function(req, res){
    post.findAll().then(function(post){
        res.render("consulta", {post})
    }).catch(function(erro){
        console.log("Erro ao carregar banco de dados: "+ erro)
    })
})

app.get("/delete/:id", function(req, res){
    post.destroy({
        where: {id: req.params.id }, 
        force: true
    }).then(function(){
        res.redirect("/consulta")   
    }).catch(function(erro){
        res.send("Falha ao deletar: "+erro)
    })
})


app.listen(8081, function(){
    console.log("servidor ativo")
})

