/* global describe beforeEach it */
const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

// var sth = 43

// expect('sth').to.equal(42)

describe('Order model', () => {
  //   beforeEach(() => {
  //     return db.sync({force: true})
  //   })

  describe('create', () => {
    beforeEach(() => {})

    it('should add an order and respond with the new object', done => {
      Order.create({
        date: '2019-09-03',
        status: 'CREATED',
        total: 1,
        recepientFirstName: 'Stacy',
        recepientLastName: 'Satran',
        recepientemail: 'stacy@abc.com'
      })
        .then(order => {
          expect(order.get('date')).to.equal('2019-09-03')
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
}) // end describe('Address model')
