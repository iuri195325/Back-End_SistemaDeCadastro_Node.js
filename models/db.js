const Sequelize = require('sequelize')

//conexão com o banco de dados//
const sequelize = new Sequelize("cadastro", "root", "2254aabb", {
  host: "localhost",
  dialect: "mysql"
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
