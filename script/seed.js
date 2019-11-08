'use strict'

const db = require('../server/db')
const {User, Address, Item, LineItem, Order} = require('../server/db/models')
const {users, orders, addresses, lineItems, items} = require('./dummyData')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const usersSeed = await Promise.all(users.map(user => User.create(user)))
  console.log(`seeded ${usersSeed.length} users`)

  const ordersSeed = await Promise.all(orders.map(order => Order.create(order)))
  console.log(`seeded ${ordersSeed.length} orders`)

  const addressSeed = await Promise.all(
    addresses.map(address => Address.create(address))
  )
  console.log(`seeded ${addressSeed.length} addresses`)

  // const lineItemSeed = await Promise.all(lineItems.map(lineItem=>LineItem.create(lineItem)))
  // console.log(`seeded ${lineItemSeed.length} lineItems`)

  const itemsSeed = await Promise.all(items.map(item => Item.create(item)))
  console.log(`seeded ${itemsSeed.length} items`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
