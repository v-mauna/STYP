const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
  category: {
    type: Sequelize.STRING,
    isIn: [['new', 'sale', 'organic', 'classics', 'obscure']]
  }
})

module.exports = Category
