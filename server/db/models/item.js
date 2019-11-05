const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('item', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0
    }
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  photos: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['cerealPlaceholder.jpg']
  }
})

module.exports = Item
