const router = require('express').Router()
const Item = require('../db/models/item')

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

module.exports = router
