const router = require('express').Router()
const Item = require('../db/models/item')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll()
    res.json(items)
  } catch (err) {
    next(err)
  }
})

router.get('/category/:categoryName', async (req, res, next) => {
  try {
    console.log('category: ', req.params.categoryName)
    const items = await Item.findAll({
      where: {
        category: {
          [Op.contains]: [req.params.categoryName]
        }
      }
    })
    console.log('items:', items)
    res.json(items)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const thisItem = await Item.findByPk(req.params.id)
    if (!thisItem) {
      const err = new Error('Sorry but we could not locate that item.')
      err.status = 404
      return next(err)
    }
    res.json(thisItem)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newItem = await Item.create(req.body)
    res.json(newItem)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const origItem = await Item.findByPk(req.params.id)
    const updatedItem = await origItem.update(req.body)
    res.json(updatedItem)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const itemToDelete = await Item.findByPk(req.params.id)
    await itemToDelete.destroy()
    res.send('Item successfully removed.')
  } catch (err) {
    next(err)
  }
})

module.exports = router
