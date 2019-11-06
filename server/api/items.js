const router = require('express').Router()
const Item = require('../db/models/item')
const Category = require('../db/models/category')
const {isAdmin, isSelfOrAdmin} = require('./securityGuards')

//get all items (cereals)
router.get('/', async (req, res, next) => {
  try {
    const cereals = await Item.findAll()
    res.send(cereals)
  } catch (error) {
    next(error)
  }
})

//get single cereal
router.get('/:cerealId', async (req, res, next) => {
  try {
    console.log(req.params.cerealId)
    const cereal = await Item.findById(req.params.cerealId, {})
    res.json(cereal)
  } catch (error) {
    next(error)
  }
})


router.get('/', async (req, res, next) => {
  try {
    const items = await Items.findAll({
      include: [
        {
          model: Category,
          attributes: ['id']
        }
      ]
    })
    res.json(items)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const thisItem = await Items.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          attributes: ['id']
        }
      ]
    })
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
// Find by category route?
router.get('/categories/:categoryId', async (req, res, next) => {
  try {
    const catId = req.params.categoryId
    const categoryTable = await Category.findAll({
      where: {categoryId: catId}
    })
    const itemIds = categoryTable.map(el => el.productId)
    const items = await Items.findAll({
      where: {
        id: itemIds
      }
    })
    res.json(items)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newItem = await Items.create(req.body)
    res.json(newItem)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const origItem = await Items.findByPk(req.params.id)
    const updatedItem = await origItem.update(req.body)
    res.json(updatedItem)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const itemToDelete = await Items.findByPk(req.params.id)
    await itemToDelete.destroy()
    res.send('Item successfully removed.')
  } catch (err) {
    next(err)
  }
})

module.exports = router
