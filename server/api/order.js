const router = require('express').Router()
const {User, Address, Item, Order} = require('../db/models/')

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: User,
          as: 'customer',
          attributes: ['firstName', 'lastName', 'email']
        },
        {model: Item}
      ]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
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

router.post('/new', async (req, res, next) => {
  try {
    console.log(req.body)

    const cartitems = req.body.products

    // [ { quantity : 9, item {}}, ...]
    let orderCanBeFulfilled = true
    const checkifexists = cartitems.forEach(function(cartitem) {
      // const inventory_item = await Item.findOne({where:{id:cartitem.item.id}})

      if (inventory_item.stock < cartitem.quantity) {
        orderCanBeFulfilled = false
      }
    })

    if (orderCanBeFulfilled) {
      // const update_db_items  = cartitems.forEach(function(cartitem){
      //   // const inventory_item = await Item.findOne({where:{id:cartitem.item.id}})
      //   // await Item.update(req.body,{where:{id:cartitem.item.id},returning:true,plain:true})
      //create order history
      // })
    }
    console.log('I went to database and came back? <-------------------')
    res.status(200).send({orderCompleted: orderCanBeFulfilled})
  } catch (err) {
    next(err)
  }
})

module.exports = router
