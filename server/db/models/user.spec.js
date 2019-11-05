/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('create', () => {
    beforeEach(() => {})

    it('should add a user and respond with the new object', done => {
      Order.create({
        email: 'abcd@sth.com',
        password: 'xyz' 
      })
        .then(order => {
          expect(order.get('email')).to.equal('abcd@sth.com')
          expect(address.get('password')).to.not.equal('xyz')
          done()
        })
        .catch(err => {
          done(err)
        })
    })

  })
  // end describe('create')

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')


}) // end describe('User model')
