const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('item', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
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

Item.findByName = async function(name) {
  const item = await Item.findAll({where: {name}})
  return item
}

Item.prototype.isAvailable = function() {
  return this.stock > 0
}

module.exports = Item
