const router = require('express').Router()
const User = require('../db/models/user')
const {isAdmin, isSelfOrAdmin} = require('./securityGuards')

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
    const origUser = await User.findById(req.params.id)
    const updatedUser = await origUser.update(req.body)
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    await user.destroy()
    res.send('User successfully removed.')
  } catch (err) {
    next(err)
  }
})

module.exports = router
