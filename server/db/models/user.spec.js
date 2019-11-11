/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')
const Order = db.model('order')
const Address = db.model('address')

describe('User model', () => {
  describe('create', () => {
    it('should add a user and respond with the new object', done => {
      User.create({
        firstName: 'Joe',
        lastName: 'Schmoe',
        telephoneNumber: '555-555-4444',
        email: 'joe_schmoe@gmail.com',
        password: '12345',
        isAdmin: false
      })
        .then(user => {
          expect(user.get('firstName')).to.equal('Joe')
          expect(user.get('lastName')).to.equal('Schmoe')
          expect(user.get('telephoneNumber')).to.equal('555-555-4444')
          expect(user.get('email')).to.equal('joe_schmoe@gmail.com')
          expect(user.get('password')()).to.equal(
            User.encryptPassword('12345', user.salt())
          )
          expect(user.get('isAdmin')).to.equal(false)

          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
  // end describe('create')

  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          firstName: 'Jill',
          lastName: 'Till',
          telephoneNumber: '877-543-2311',
          email: 'jill_till@hotmail.com',
          password: '8735432311',
          isAdmin: true
        })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('8735432311')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('873543231')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')

  describe('classMethods', () => {
    describe('generateSalt', () => {
      it('returns base64 sha', () => {
        expect(User.generateSalt().length).to.be.equal(24)
      })
    }) // end describe('generateSalt')
  }) // end describe('classMethods')

  describe('associations', function() {
    /**
     * add a `hasMany` relationship between user and order,
     */
    describe('hasMany relationship between user and order', () => {
      it('adds a hasMany relationship between user and order', function() {
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
          recepientemail: 'stacy@abc.com',
          totalPrice: 32
        })
        let newuser
        return Promise.all([creatingUser, creatingOrder])
          .then(([createdUser, createdOrder]) => {
            newuser = createdUser
            // this method `addOrder` method automatically exists if you set up the association correctly
            return createdUser.addOrder(createdOrder) // tests User.hasMany(Order)
          })
          .then(() => {
            return newuser.getOrders()
          })
          .then(orders => {
            expect(orders).to.be.an('array')
            expect(orders.length).to.equal(1)

            expect(orders[0].recepientLastName).to.equal('Satran')
          })
      })
    })

    describe('hasMany relationship between user and address', () => {
      it('adds a hasMany relationship between user and address', () => {
        const creatingUser = User.create({
          firstName: 'Jill',
          lastName: 'Till',
          telephoneNumber: '877-543-2311',
          email: 'jill_till@hotmail.com',
          password: '8735432311',
          isAdmin: true
        })

        const creatingAddress = Address.create({
          street1: '444-South 15 Street',
          city: 'Lindenhurtst',
          state: 'NY',
          zip: 11757,
          type: 'shipping'
        })
        let newuser
        return Promise.all([creatingUser, creatingAddress])
          .then(([createdUser, createdAddress]) => {
            newuser = createdUser
            // this method `setCustomer` method automatically exists if you set up the association correctly
            return createdUser.addAddress(createdAddress) // tests User.hasMany(Order)
          })
          .then(() => {
            return newuser.getAddresses()
          })
          .then(addresses => {
            expect(addresses).to.be.an('array')
            expect(addresses.length).to.equal(1)
            expect(addresses[0].city).to.equal('Lindenhurtst')
          })
      })
    })
  })
}) // end describe('User model')
