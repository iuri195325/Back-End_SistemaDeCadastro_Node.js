const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const handlebars = require("express-handlebars");
const cadastro = require("./models/User")


//bodyParser configuração
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());

  //config
  //template engine handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set("view engine", "handlebars");

    app.get("/home", function(req, res){
      res.render('home.handlebars');
    })
    // rota para o formulario
    app.get("/formulario", function(req, res){
      res.render('formulario.handlebars');
    })
  //salvando o cadastro no banco de dados
  app.post("/index", function(req, res){
    cadastro.create({
      usuario: req.body.usuario,
      email: req.body.email,
      senha: req.body.senha
    }).then(function(){
      res.redirect('/home')
    })
  })

  app.listen(8081, function(){
    console.log("Hello World!");
  });
