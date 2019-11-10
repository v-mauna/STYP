const User = require('./user')
const Address = require('./address')
const Item = require('./item')
const Order = require('./order')
const LineItem = require('./lineItem')

Address.belongsTo(User)

Item.belongsToMany(Order, {through: LineItem})

Order.belongsTo(User, {as: 'customer'})

Order.belongsToMany(Item, {through: LineItem})
Order.belongsTo(Address)
Order.hasMany(Item)

LineItem.belongsTo(Order)
LineItem.belongsTo(Item)

User.hasMany(Address)
User.hasMany(Order)

module.exports = {
  User,
  Address,
  Item,

  Order,
  LineItem
}
