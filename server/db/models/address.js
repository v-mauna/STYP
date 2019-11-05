const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('address', {
  street1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  street2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zip: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [['shipping', 'billing']]
    }
  }
})

module.exports = Address
