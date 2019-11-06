/* global describe beforeEach it */
const {expect} = require('chai')
const db = require('../index')
const LineItem = db.model('lineItem')

describe('LineItem', () => {
  beforeEach(() => {})

  describe('LineItem model', () => {
    beforeEach('Create', () => {})

    it('should add an item and respond with the new object', done => {
      LineItem.create({
        quantity: 5
      })
        .then(lineItem => {
          expect(lineItem.get('quantity')).to.equal(5)
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
  // end describe('create')
})
