const db = require("./db.js")

//criando as tabelas onde ira ficar os cadastros//

const Cadastro = db.sequelize.define('lista', {
  usuario: {
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING
  },
  senha: {
    type: db.Sequelize.STRING
  }
})
//Cadastro.sync({force: true})//
module.exports = Cadastro;
