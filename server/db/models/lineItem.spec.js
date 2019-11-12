/* global describe beforeEach it */
const {expect} = require('chai')
const db = require('../index')
const LineItem = db.model('lineItem')
const Order = db.model('order')
const Item = db.model('item')

describe('LineItem', () => {
  beforeEach(async function() {
    await db.sync({force: true})
  })

  let neworder
  let newitem
  describe('LineItem model', () => {
    describe('create', () => {
      it('should add an item and respond with the new object', done => {
        // expect()
        Order.create({
          status: 'CREATED',
          recepientFirstName: 'Stacy',
          recepientLastName: 'Satran',
          recepientemail: 'stacy@abc.com',
          totalPrice: 32
        })
          .then(order => {
            neworder = order
            return Item.create({
              name: 'Ricotta & Yogurt Parfait',
              price: 8.4,
              stock: 300,
              description:
                'Reminiscent of a lemon cheesecake, this healthy breakfast recipe is easy to throw together in the morning. Or stir together the filling in a jar the night before and top with the fruit, nuts and seeds when you get to work.',
              imageUrl:
                'http://images.media-allrecipes.com/userphotos/960x960/4027929.jpg'
            })
          })
          .then(item => {
            newitem = item
            return neworder.addItem(item, {
              through: {quantity: 55, price: 4.44}
            })
          })
          .then(lineitems => {
            expect(lineitems.length).to.equal(1)
            let lineitem = lineitems[0]

            expect(lineitem.get('quantity')).to.equal(55)
            expect(lineitem.get('price')).to.equal('4.44')
            expect(lineitem.get('orderId')).to.equal(neworder.id)
            expect(lineitem.get('itemId')).to.equal(newitem.id)
            done()
          })
      })
    })
  })
  // end describe('create')

  describe('associations', () => {
    describe('lineItem belongTo  order and lineItem belongsTo item', () => {
      it('orderId, itemId is on lineItem table', done => {
        // expect()
        Order.create({
          status: 'CREATED',
          recepientFirstName: 'Stacy',
          recepientLastName: 'Happy',
          recepientemail: 'stacyhappy@abc.com',
          totalPrice: 32
        })
          .then(order => {
            neworder = order
            return Item.create({
              name: 'Ricotta & Yogurt Parfait',
              price: 8.4,
              stock: 300,
              description:
                'Reminiscent of a lemon cheesecake, this healthy breakfast recipe is easy to throw together in the morning. Or stir together the filling in a jar the night before and top with the fruit, nuts and seeds when you get to work.',
              imageUrl:
                'http://images.media-allrecipes.com/userphotos/960x960/4027929.jpg'
            })
          })
          .then(item => {
            newitem = item
            return neworder.addItem(item, {
              through: {quantity: 55, price: 4.44}
            })
          })
          .then(lineitems => {
            expect(lineitems.length).to.equal(1)
            let lineitem = lineitems[0]

            expect(lineitem.get('quantity')).to.equal(55)
            expect(lineitem.get('price')).to.equal('4.44')
            expect(lineitem.get('orderId')).to.equal(neworder.id)
            expect(lineitem.get('itemId')).to.equal(newitem.id)
            done()
          })
      })
    })
  })
})
// end describe('associations')

// end describe LineItem Model
