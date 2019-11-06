const db = require('../server/db/')
const User = require('../server/db/models/user')
const Address = require('../server/db/models/address')
const Items = require('../server/db/models/item')
const LineItem = require('../server/db/models/lineItem')
const Order = require('../server/db/models/order')

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

const items = [
  {
    name: 'Ricotta & Yogurt Parfait',
    price: 8.0,
    stock: 300,
    description:
      'Reminiscent of a lemon cheesecake, this healthy breakfast recipe is easy to throw together in the morning. Or stir together the filling in a jar the night before and top with the fruit, nuts and seeds when you get to work.',
    photos: [
      'http://images.media-allrecipes.com/userphotos/960x960/4027929.jpg'
    ]
  },
  {
    name: 'Rasberry Yogurt Cereal',
    price: 7.0,
    stock: 100,
    description:
      'For breakfast, snack or a healthy dessert, try using yogurt instead of milk for your cereal. If making this as a to-go snack, keep the cereal separate and top just before eating.',
    photos: [
      'http://images.media-allrecipes.com/userphotos/960x960/4473423.jpg'
    ]
  },
  {
    name: 'Rainbow Yogurt Bowl',
    price: 9.0,
    stock: 400,
    description:
      'Arrange vibrant, colorful fruit in the shape of a rainbow on top of yogurt for a fun and delicious healthy breakfast or snack kids will actually want to eat.',
    photos: [
      'http://images.media-allrecipes.com/userphotos/960x960/4535705.jpg'
    ]
  },
  {
    name: 'Owl Yogurt Bowl',
    price: 9.0,
    stock: 30,
    description:
      'Bananas, blueberries and nuts make a fun topping on this yogurt bowl that looks like an owl for a healthy breakfast or snack your kids will actually want to eat.',
    photos: [
      'http://images.media-allrecipes.com/userphotos/960x960/4535703.jpg'
    ]
  },
  {
    name: 'Kitty-Cat Oatmeal Bowl',
    price: 9.0,
    stock: 30,
    description:
      'Kids will love this creative, healthy recipe with filling rolled oats, honey for natural sweetness and a fresh fruit kitty-cat face for a fun breakfast they will actually want to eat!',
    photos: [
      'http://images.media-allrecipes.com/userphotos/960x960/4526747.jpg'
    ]
  }
]
const orders = [
  {
    date: '2019-09-03',
    status: 'CREATED',
    total: 1,
    recepientFirstName: 'Stacy',
    recepientLastName: 'Satran',
    recepientemail: 'stacy@abc.com',
    customerId: 1
  },
  {
    date: '2019-09-05',
    status: 'PROCESSING',
    total: 3,
    recepientFirstName: 'Megan',
    recepientLastName: 'Johnson',
    recepientemail: 'megan@abc.com',
    customerId: 2
  },
  {
    date: '2019-09-04',
    status: 'CANCELLED',
    total: 4,
    recepientFirstName: 'John',
    recepientLastName: 'Smith',
    recepientemail: 'john@AbortController.com',
    customerId: 1
  },
  {
    date: '2019-08-25',
    status: 'COMPLETED',
    total: 5,
    recepientFirstName: 'Will',
    recepientLastName: 'Davis',
    recepientemail: 'will@abc.com',
    customerId: 1
  }
]

const lineItems = [
  {
    itemId: 1,
    orderId: 1,
    quantity: 5
  },
  {
    itemId: 2,
    orderId: 1,
    quantity: 2
  },
  {
    itemId: 1,
    orderId: 2,
    quantity: 7
  },
  {
    itemId: 1,
    orderId: 3,
    quantity: 2
  },
  {
    itemId: 3,
    orderId: 3,
    quantity: 5
  },
  {
    productId: 3,
    orderId: 3,
    quantity: 7
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

  await Promise.all(
    items.map(item => {
      return Items.create(item)
    })
  )
  await Promise.all(
    orders.map(order => {
      return Order.create(order)
    })
  )

  await Promise.all(
    lineItems.map(lineItem => {
      return LineItem.create(lineItem)
    })
  )

  // seed your database here!

  console.log(green('Seeding success!'))
  db.close()
}

seed().catch(err => {
  console.error(red(`Oh no! There's a problem somehwere!`))
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
