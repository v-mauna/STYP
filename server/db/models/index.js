const User = require('./user')
const Address = require('./address')
const Item = require('./item')
const Category = require('./category')
const Order = require('./order')
const LineItem = require('./lineItem')

Address.belongsTo(User)

Category.belongsToMany(Item, {through: 'tags'})

Item.belongsToMany(Category, {through: 'tags'})
Item.hasMany(LineItem)
Item.belongsToMany(Order, {through: 'orderItem'})

Order.belongsTo(User, {as: 'customer'})
Order.hasMany(LineItem)
Order.hasMany(Item)

LineItem.belongsTo(Order)
LineItem.belongsTo(Item)

User.hasMany(Address)
User.hasMany(Order)

module.exports = {
  User,
  Address,
  Item,
  Category,
  Order,
  LineItem
}
