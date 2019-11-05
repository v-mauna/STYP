const Sequelize = require('sequelize')
const db = require('../db')
const LineItem = require('./LineItem')

const Order = db.define('order', {
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('CREATED', 'PROCESSING', 'CANCELLED', 'COMPLETED'),
    defaultValue: 'CREATED',
    allowNull: false
  },
  total: {
    type: Sequelize.INTEGER
  },
  recepientFirstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  recepientLastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  recepientemail: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

module.exports = Order
