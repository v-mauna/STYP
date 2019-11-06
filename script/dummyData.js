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
    zip: 10010,
    type: 'shipping',
    userId: 1
  },
  {
    street1: '351-Stewart Ave',
    city: 'Garden City',
    state: 'NY',
    zip: 11530,
    type: 'shipping',
    userId: 2
  },
  {
    street1: '1-Hacker Way',
    city: 'Menlo Park',
    state: 'CA',
    zip: 94025,
    type: 'billing',
    userId: 3
  },
  {
    street1: '3500 Deer Creek Rd.',
    city: 'Palo Alto',
    state: 'CA',
    zip: 94304,
    type: 'shipping',
    userId: 4
  },
  {
    street1: '444-South 15 Street',
    city: 'Lindenhurtst',
    state: 'NY',
    zip: 11757,
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

module.exports = {users, orders, addresses, items}
