const router = require('express').Router()
const {User, Address, Item, Order} = require('../db/models/')

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: User,
          as: 'customer',
          attributes: ['name', 'email']
        },
        {model: Item}
      ]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/id', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'customer'
        }
      ]
    })
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.get('/:id/items', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [
        {
          model: Item,
          attributes: ['id', 'name', 'price', 'stock']
        }
      ]
    })
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.get('/order-history/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const orderHistory = await Order.findAll(
      {
        where: {
          customerId: userId
        }
      },
      {include: [{model: User, as: 'customer'}]}
    )
    res.json(orderHistory)
  } catch (err) {
    next(err)
  }
})

module.exports = router
