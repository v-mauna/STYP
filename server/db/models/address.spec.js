/* global describe beforeEach it */
const {expect} = require('chai')
const db = require('../index')
const Address = db.model('address')

describe('Address model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('create', () => {
    beforeEach(() => {})

    it('should add an address and respond with the new object', done => {
      Address.create({
        street1: '55-Lexington Ave.',
        street2: 'Apt.3b',
        city: 'New York',
        state: 'NY',
        zip: '10010',
        type: 'shipping'
      })
        .then(address => {
          expect(address.get('street1')).to.equal('55-Lexington Ave.')
          expect(address.get('street2')).to.not.equal('Apt.3b')
          expect(address.get('city')).to.equal('New York')
          expect(address.get('state')).to.not.equal('NY')
          expect(address.get('zip')).to.equal('10010')
          expect(address.get('type')).to.equal('shipping')
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
  // end describe('create')
}) // end describe('Address model')
