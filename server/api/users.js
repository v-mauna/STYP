const router = require('express').Router()
const User = require('../db/models/user')
const Order = require('../db/models/order')
const LineItem = require('../db/models/lineItem')
const Item = require('../db/models/item')
const {isAdmin, isSelfOrAdmin} = require('./securityGuards')

// Basic User Utilities
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email', 'firstName', 'lastName']
    })
    console.log('Users: ', users)
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const thisUser = await User.findByPk(req.params.id)
    res.json(thisUser)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const origUser = await User.findByPk(req.params.id)
    const updatedUser = await origUser.update(req.body)
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    await user.destroy()
    res.send('User successfully removed.')
  } catch (err) {
    next(err)
  }
})

// USER CART UTILITIES

router.get('/:id/cart', async (req, res, next) => {
  try {
    const userCart = await Order.findOne({
      where: {
        customerId: req.params.id,
        status: 'CREATED'
      },
      include: [{model: LineItem, include: [{model: Item}]}]
    })
    res.json(userCart)
  } catch (err) {
    next(err)
  }
})

router.post('/:id/cart', async (req, res, next) => {
  try {
    const userCart = await Order.findOne({
      where: {
        customerId: req.params.id,
        status: 'CREATED'
      }
    })
    await LineItem.create({
      orderId: userCart.id,
      itemId: req.body.id,
      quantity: req.body.quantity
    })
    res.send('Item successfully added')
  } catch (err) {
    next(err)
  }
})

router.put('/:id/cart', async (req, res, next) => {
  try {
    const userCart = await Order.findOne({
      where: {
        customerId: req.params.id,
        status: 'CREATED'
      }
    })
    await LineItem.update(
      {
        quantity: req.body.quantity
      },
      {
        where: {
          orderId: userCart.id,
          itemId: req.body.id
        }
      }
    )
    res.send('Quantity successfully updated')
  } catch (err) {
    next(err)
  }
})

router.delete('/:id/cart', async (req, res, next) => {
  try {
    const userCart = await Order.findOne({
      where: {
        customerId: req.params.id,
        status: 'CREATED'
      }
    })
    await LineItem.destroy({
      where: {
        orderId: userCart.id,
        itemId: req.body.id
      }
    })
    res.send('Item successfully deleted')
  } catch (err) {
    next(err)
  }
})

router.put('/:id/cart/total', async (req, res, next) => {
  try {
    const userCart = await Order.findOne({
      where: {
        customerId: req.params.id,
        status: 'CREATED'
      }
    })
    await userCart.update({
      total: req.body.total
    })
    res.send('Total successfully updated')
  } catch (err) {
    next(err)
  }
})

module.exports = router
