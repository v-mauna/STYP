const User = require('./user')
const Address = require('./address')
const Item = require('./item')
const Category = require('./category')
const Order = require('./order')
const LineItem = require('./lineItem')

Address.belongsTo(User)

Category.belongsToMany(Item, {through: 'product_categories'})

Item.belongsToMany(Category, {through: 'product_categories'})
Item.belongsToMany(Order, {through: LineItem})

Order.belongsTo(User, {as: 'customer'})
Order.hasMany(Item)
Order.belongsToMany(Item, {through: LineItem})
Order.belongsTo(Address)

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
