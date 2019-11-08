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
    name: `Frosted Flakes`,
    price: 4.99,
    stock: 50,
    description: `They'rrrree GREAT - Tony the Tiger`,
    category: ['all', 'classics', 'bestsellers'],
    imageUrl:
      'https://clickamericana.com/wp-content/uploads/Vintage-Sugar-Frosted-Flakes-cereal-ad-from-1961.webp'
  },
  {
    name: 'General Jets',
    price: 3.99,
    stock: 40,
    description:
      'Re-discover that old-fashioned goodness without having to turn on your time machine.',
    category: ['all', 'classics', 'the uknowns'],
    imageUrl: 'http://shepelavy.com/blog/wp-content/uploads/2011/05/Jets.jpg'
  },
  {
    name: 'Raisin Bran',
    price: 3.99,
    stock: 60,
    description:
      'Have your breakfast and a sweet treat without any of the guilt.',
    category: ['all', 'classics'],
    imageUrl:
      'http://shepelavy.com/blog/wp-content/uploads/2011/05/RaisenBranOrg-480x653.jpg'
  },
  {
    name: 'Croonchy Star',
    price: 3.99,
    stock: 20,
    description:
      'This is what happens when Jim Henson and the Swedish Chef come together...',
    category: ['all', 'the uknowns'],
    imageUrl:
      'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr01/2013/2/15/14/enhanced-buzz-orig-17795-1360958130-5.jpg?downsize=700:*&output-format=auto&output-quality=auto'
  },
  {
    name: 'ET Cereal',
    price: 3.99,
    stock: 35,
    description: `So good, you'll travel the universe to find it.`,
    category: ['all', 'the uknowns', 'bestsellers'],
    imageUrl:
      'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr01/2013/2/15/14/enhanced-buzz-orig-17795-1360958130-5.jpg?downsize=700:*&output-format=auto&output-quality=auto'
  },
  {
    name: `Bart Simpson's No-Problemos`,
    price: 3.99,
    stock: 35,
    description: `Why eat your shorts when you can eat this instead?`,
    category: ['all', 'bestsellers'],
    imageUrl:
      'https://vignette.wikia.nocookie.net/simpsons/images/d/de/No_Problemos.jpg/revision/latest?cb=20100419152516'
  },
  {
    name: `NP Mesa Sunrise`,
    price: 6.29,
    stock: 100,
    description: `Put a little more pep in your step with this wholesome,GF option.`,
    category: ['all', 'bestsellers', 'organic'],
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91iJ6DIg0UL._SL1500_.jpg'
  },
  {
    name: `Kashi Blueberry Clusters`,
    price: 3.1,
    stock: 100,
    description: `Feeling Blue? Not when you're done having a bowl of this.`,
    category: ['all', 'bestsellers', 'organic'],
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81HcaHt0VzL._SL1500_.jpg'
  },
  {
    name: `Cascadian Farm Organic Buzz Honey Crunch`,
    price: 3.1,
    stock: 100,
    description: `Need a little help buzzing through the day? Look no further...`,
    category: ['all', 'bestsellers', 'organic'],
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91PaFBxsaQL._SL1500_.jpg'
  },
  {
    name: `Vigilant Eats Cacao Banana Crunch`,
    price: 3.1,
    stock: 100,
    description: `Your new go-to on those days you need something hot...`,
    category: ['all', 'the unknowns', 'organic'],
    imageUrl:
      'https://img.thrivemarket.com/store/full/8/6/863209000192-1_1_1.jpg?w=2000'
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
