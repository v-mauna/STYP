/* global describe beforeEach it */
const {expect} = require('chai')
const db = require('../index')
const LineItem = db.model('lineItem')

describe('LineItem', () => {
  beforeEach(() => {})

  describe('LineItem model', () => {
    describe('create', () => {
      describe('creates a new object', () => {
        it('should add an item and respond with the new object', () => {
          // expect()
        })
      })
    })
    // end describe('create')

    describe('associations', () => {
      describe('lineItem belongsTo order', () => {
        it('orderId is on lineItem table', () => {
          // expect()
        })
      })

      describe('lineItem belongsTo item', () => {
        it('itemId is on lineItem table', () => {
          // expect()
        })
      })
    })
    // end describe('associations')
  })
})
// end describe LineItem Model
