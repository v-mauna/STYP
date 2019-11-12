const router = require('express').Router()
const User = require('../db/models/user')
const Order = require('../db/models/order')
const LineItem = require('../db/models/lineItem')
const Item = require('../db/models/item')

// Basic User Utilities
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email', 'firstName', 'lastName']
    })

    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const thisUser = await User.findByPk(req.params.id, {
      attributes: ['id', 'email', 'firstName', 'lastName']
    })
    res.json(thisUser)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const origUser = await User.findByPk(req.params.id)
    const [/*numberofRows,*/ updatedUser] = await origUser.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
      },
      {
        where: {
          id: req.params.studentId
        },
        returning: true,
        plain: true
      }
    )
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    await user.destroy()
    res.json('User successfully removed.')
  } catch (err) {
    next(err)
  }
})

//USER ORDERS

router.get(':/id/orders', async (req, res, next) => {
  try {
    const thisUser = await User.findByPk(req.params.id, {
      attributes: ['id', 'email', 'firstName', 'lastName', 'email'],
      include: {model: Order}
    })
    res.json(thisUser)
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
    res.json('Item successfully added')
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
    res.json('Quantity successfully updated')
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
    res.json('Item successfully deleted')
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
    res.json('Total successfully updated')
  } catch (err) {
    next(err)
  }
})

module.exports = router
