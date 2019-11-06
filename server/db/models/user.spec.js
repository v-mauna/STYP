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
          expect(user.get('lastName')).to.not.equal('Schmoe')
          expect(user.get('telephoneNumber')).to.not.equal('555-555-4444')
          expect(user.get('email')).to.not.equal('joe_schmoe@gmail.com')
          expect(user.get('password')).to.not.equal('12345')
          expect(user.get('isAdmin')).to.not.equal(false)

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
}) // end describe('User model')
