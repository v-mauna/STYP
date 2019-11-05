const db = require('../server/db/')
const User = require('../server/db/models/user')
const Address = require('../server/db/models/address')

const {green, red} = require('chalk')

const users = [
  {
    firstName: 'Joe',
    lastName: 'Schmoe',
    telephoneNumber: '555-555-4444',
    email: 'joe_schmoe@gmail.com',
    password: '12345',
    isAdmin: false
  },
  {
    firstName: 'Jill',
    lastName: 'Till',
    telephoneNumber: '877-543-2311',
    email: 'jill_till@hotmail.com',
    password: '8735432311',
    isAdmin: true
  },
  {
    firstName: 'Mark',
    lastName: 'Zuckerberg',
    telephoneNumber: '516-216-2233',
    email: 'mark@facebook.com',
    password: 'iruletheworld',
    isAdmin: true
  },
  {
    firstName: 'Nick',
    lastName: 'Tesla',
    telephoneNumber: '917-682-3557',
    email: 'electricNic@aol.com',
    password: 'fizzBuzz',
    isAdmin: false
  }
]

const addresses = [
  {
    street1: '55-Lexington Ave.',
    street2: 'Apt.3b',
    city: 'New York',
    state: 'NY',
    zip: '10010',
    type: 'shipping',
    userId: 1
  },
  {
    street1: '351-Stewart Ave',
    city: 'Garden City',
    state: 'NY',
    zip: '11530',
    type: 'shipping',
    userId: 2
  },
  {
    street1: '1-Hacker Way',
    city: 'Menlo Park',
    state: 'CA',
    zip: '94025',
    type: 'billing',
    userId: 3
  },
  {
    street1: '3500 Deer Creek Rd.',
    city: 'Palo Alto',
    state: 'CA',
    zip: '94304',
    type: 'shipping',
    userId: 4
  },
  {
    street1: '444-South 15 Street',
    city: 'Lindenhurtst',
    state: 'NY',
    zip: '11757',
    type: 'shipping',
    userId: 3
  }
]

const seed = async () => {
  await db.sync({force: true})
  await Promise.all(
    users.map(user => {
      return User.create(user)
    })
  )
  await Promise.all(
    addresses.map(address => {
      return Address.create(address)
    })
  )

  // seed your database here!

  console.log(green('Seeding success!'))
  db.close()
}

seed().catch(err => {
  console.error(red(`Oh noes! There's a problem somehwere!`))
  console.error(err)
  db.close()
})

// 'use strict'

// const db = require('../server/db')
// const {User} = require('../server/db/models')

// async function seed() {
//   await db.sync({force: true})
//   console.log('db synced!')

//   const users = await Promise.all([
//     User.create({email: 'cody@email.com', password: '123'}),
//     User.create({email: 'murphy@email.com', password: '123'})
//   ])

//   console.log(`seeded ${users.length} users`)
//   console.log(`seeded successfully`)
// }

// // We've separated the `seed` function from the `runSeed` function.
// // This way we can isolate the error handling and exit trapping.
// // The `seed` function is concerned only with modifying the database.
// async function runSeed() {
//   console.log('seeding...')
//   try {
//     await seed()
//   } catch (err) {
//     console.error(err)
//     process.exitCode = 1
//   } finally {
//     console.log('closing db connection')
//     await db.close()
//     console.log('db connection closed')
//   }
// }

// // Execute the `seed` function, IF we ran this module directly (`node seed`).
// // `Async` functions always return a promise, so we can use `catch` to handle
// // any errors that might occur inside of `seed`.
// if (module === require.main) {
//   runSeed()
// }

// // we export the seed function for testing purposes (see `./seed.spec.js`)
// module.exports = seed
