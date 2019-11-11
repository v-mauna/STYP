const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('CREATED', 'PROCESSING', 'CANCELLED', 'COMPLETED'),
    defaultValue: 'CREATED',
    allowNull: false
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
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Order
