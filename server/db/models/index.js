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

Order.belongsTo(User, {as: 'customer'})
Order.hasMany(LineItem)

LineItem.belongsTo(Order)
LineItem.belongsTo(Item)

User.hasMany(Address)

module.exports = {
  User,
  Address,
  Item,
  Category,
  Order,
  LineItem
}
