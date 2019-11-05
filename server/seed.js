const {Product, Category, LineItem, Order, User, Review} = require('./models')

const orders = [
  {
    date: '2019-09-03',
    status: 'CREATED',
    total: 1,
    recepientFirstName: 'Stacy',
    recepientLastName: 'Satran',
    recepientemail: 'stacy@abc.com'
  },
  {
    date: '2019-09-05',
    status: 'PROCESSING',
    total: 3,
    recepientFirstName: 'Megan',
    recepientLastName: 'Johnson',
    recepientemail: 'megan@abc.com'
  },
  {
    date: '2019-09-04',
    status: 'CANCELLED',
    total: 4,
    recepientFirstName: 'John',
    recepientLastName: 'Smith',
    recepientemail: 'john@AbortController.com'
  },
  {
    date: '2019-08-25',
    status: 'COMPLETED',
    total: 5,
    recepientFirstName: 'Will',
    recepientLastName: 'Davis',
    recepientemail: 'will@abc.com'
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
