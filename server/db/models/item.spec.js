/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Item = db.model('item')
const Order = db.model('order')

describe('Item model', () => {
  let itemSaved
  beforeEach(async function() {
    await db.sync({force: true})
    itemSaved = await Item.create({
      name: 'Ricotta & Yogurt Parfait',
      price: 8.4,
      stock: 300,
      description:
        'Reminiscent of a lemon cheesecake, this healthy breakfast recipe is easy to throw together in the morning. Or stir together the filling in a jar the night before and top with the fruit, nuts and seeds when you get to work.',
      imageUrl:
        'http://images.media-allrecipes.com/userphotos/960x960/4027929.jpg'
    })
  })

  describe('create', () => {
    it('should add an item and respond with the new object', done => {
      expect(itemSaved.get('name')).to.equal('Ricotta & Yogurt Parfait')
      expect(itemSaved.get('price')).to.equal('8.40')
      expect(itemSaved.get('stock')).to.equal(300)
      expect(itemSaved.get('description')).to.equal(
        'Reminiscent of a lemon cheesecake, this healthy breakfast recipe is easy to throw together in the morning. Or stir together the filling in a jar the night before and top with the fruit, nuts and seeds when you get to work.'
      )
      expect(itemSaved.get('imageUrl')).to.deep.equal(
        'http://images.media-allrecipes.com/userphotos/960x960/4027929.jpg'
      )
      done()
    })
  })

  describe('associations', function() {
    describe('belongsToMany realationship between item and order', () => {
      it('adds belongsToMany realationship between item and order through LineItem', done => {
        Order.create({
          status: 'CREATED',
          recepientFirstName: 'Stacy',
          recepientLastName: 'Satran',
          recepientemail: 'stacy@abc.com'
        })
          .then(order => {
            return itemSaved.addOrder(order, {
              through: {quantity: 3, price: 2.2}
            })
          })
          .then(() => {
            return itemSaved.getOrders()
          })
          .then(orders => {
            expect(orders.length).to.be.equal(1)
            expect(orders[0].lineItem.get('quantity')).to.be.equal(3)
            expect(orders[0].lineItem.get('price')).to.be.equal('2.20')
            done()
          })
          .catch(err => {
            console.log(err)
            done(err)
          })
      })
    })
  })
  // end describe('associations')
})
// end describe('Item model')
