const {Product, Category, LineItem, Order, User} = require('./server/db/models')

const items = [
  {
    name: 'Ricotta & Yogurt Parfait',
    price: 8.00,
    stock: 300,
    description:
      'Reminiscent of a lemon cheesecake, this healthy breakfast recipe is easy to throw together in the morning. Or stir together the filling in a jar the night before and top with the fruit, nuts and seeds when you get to work.',
    photos: 'http://images.media-allrecipes.com/userphotos/960x960/4027929.jpg'
  },
  {
    name: 'Rasberry Yogurt Cereal',
    price: 7.00,
    stock: 100,
    description:
      'For breakfast, snack or a healthy dessert, try using yogurt instead of milk for your cereal. If making this as a to-go snack, keep the cereal separate and top just before eating.',
    photos: 'http://images.media-allrecipes.com/userphotos/960x960/4473423.jpg'
  },
  {
    name: 'Rainbow Yogurt Bowl',
    price: 9.00,
    stock: 400,
    description:
      'Arrange vibrant, colorful fruit in the shape of a rainbow on top of yogurt for a fun and delicious healthy breakfast or snack kids will actually want to eat.',
    photos: 'http://images.media-allrecipes.com/userphotos/960x960/4535705.jpg'
  },
  {
    name: 'Owl Yogurt Bowl',
    price: 9.00,
    stock: 30,
    description:
      'Bananas, blueberries and nuts make a fun topping on this yogurt bowl that looks like an owl for a healthy breakfast or snack your kids will actually want to eat.',
    photos: 'http://images.media-allrecipes.com/userphotos/960x960/4535703.jpg'
  },
  {
    name: 'Kitty-Cat Oatmeal Bowl',
    price: 9.00,
    stock: 30,
    description:
      'Kids will love this creative, healthy recipe with filling rolled oats, honey for natural sweetness and a fresh fruit kitty-cat face for a fun breakfast they will actually want to eat!',
    photos: 'http://images.media-allrecipes.com/userphotos/960x960/4526747.jpg'
  }
]

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
