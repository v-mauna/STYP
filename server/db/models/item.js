const Sequelize = require('sequelize')
const Op = Sequelize.Op
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
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images.unsplash.com/photo-1521483451569-e33803c0330c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  category: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['all']
  }
})

Item.findByCategory = function(categoryInput) {
  const item = Item.findAll({
    where: {
      category: {
        [Op.contains]: [categoryInput]
      }
    }
  })
  return item
}

Item.prototype.isAvailable = function() {
  return this.stock > 0
}

module.exports = Item
