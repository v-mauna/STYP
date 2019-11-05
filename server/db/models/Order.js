const Sequelize = require('sequelize');
const db = require('../db');


const Order = db.define('order', {
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM("CREATED", "PROCESSING", "CANCELLED", "COMPLETED"),
    defaultValue: "CREATED",
    allowNull: false
  },
  total: {
    type: Sequelize.NUMBER
  }
})

module.exports = Order;