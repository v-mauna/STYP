const User = require('./user')
const Address = require('./address')
const Item = require('./item')
const Category = require('./category')
const Order = require('./order')
const LineItem = require('./lineItem')

Address.belongsTo(User)
User.hasMany(Address)

Category.belongsToMany(Item, {through: 'tags'})
Item.belongsToMany(Category, {through: 'tags'})

Order.belongsTo(User, {as: 'customer'})
User.hasMany(Order)

LineItem.belongsTo(Order)
Order.hasMany(LineItem)

LineItem.belongsTo(Item)
Item.hasMany(LineItem)

module.exports = {
  User,
  Address,
  Item,
  Category,
  Order,
  LineItem
}
