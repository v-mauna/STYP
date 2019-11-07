/* global describe beforeEach it */
const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')
const User = db.model('user')
const Item = db.model('item')
const Address = db.model('address')

describe('Order model', () => {
  describe('create user', () => {
    beforeEach(() => {})
    it('should add an order and respond with the new object', done => {
      Order.create({
        status: 'CREATED',
        total: 1,
        recepientFirstName: 'Stacy',
        recepientLastName: 'Satran',
        recepientemail: 'stacy@abc.com'
      })
        .then(order => {
          expect(order.get('status')).to.equal('CREATED')
          expect(order.get('total')).to.equal(1)
          expect(order.get('recepientFirstName')).to.equal('Stacy')
          expect(order.get('recepientLastName')).to.equal('Satran')
          expect(order.get('recepientemail')).to.equal('stacy@abc.com')

          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
  // end describe('create')

  describe('associations', function() {
    /**
     * Add a `belongsTo` relationship between user and order,
     */
    describe('order belongs to user, userId is stored in Order table', () => {
      it('adds belongsTo relationship between user and order', function() {
        const creatingUser = User.create({
          firstName: 'Jill',
          lastName: 'Till',
          telephoneNumber: '877-543-2311',
          email: 'jill_till@hotmail.com',
          password: '8735432311',
          isAdmin: true
        })

        const creatingOrder = Order.create({
          status: 'CREATED',
          total: 1,
          recepientFirstName: 'Stacy',
          recepientLastName: 'Satran',
          recepientemail: 'stacy@abc.com'
        })
        let newuser
        return Promise.all([creatingUser, creatingOrder])
          .then(([createdUser, createdOrder]) => {
            newuser = createdUser
            // this method `setCustomer` method automatically exists if you set up the association correctly
            return createdOrder.setCustomer(createdUser) // tests Order.belongsTo(User, {as: 'customer'})
          })
          .then(order => {
            expect(newuser.id).to.be.equal(order.customerId)
          })
      })
    })
  })

  describe('hasMany realationship between order and item', () => {
    it('adds hasMany realationship between order and item', () => {
      // expect()
    })
  })

  describe('belongsToMany realationship between order and item', () => {
    it('adds belongsToMany realationship between order and item through LineItem', () => {
      // expect()
    })
  })

  describe('belongsTo realationship between order and address', () => {
    it('belongsTo realationship between order and address', () => {
      // expect()
    })
  })
  //  end describe('associations')
})

// end describe('Order model')
