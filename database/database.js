const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root', 'maratona', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection