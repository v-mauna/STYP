/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Item = db.model('item')

describe('Item model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('create', () => {
    beforeEach(() => {})

    it('should add an item and respond with the new object', done => {
      Item.create({
        name: 'Ricotta & Yogurt Parfait',
        price: 8.0,
        stock: 300,
        description:
          'Reminiscent of a lemon cheesecake, this healthy breakfast recipe is easy to throw together in the morning. Or stir together the filling in a jar the night before and top with the fruit, nuts and seeds when you get to work.',
        photos: [
          'http://images.media-allrecipes.com/userphotos/960x960/4027929.jpg'
        ]
      })
        .then(item => {
          expect(item.get('name')).to.equal('Ricotta & Yogurt Parfait')
          expect(item.get('price')).to.equal(8.0)
          expect(item.get('stock')).to.equal(300)
          expect(item.get('description')).to.equal(
            'Reminiscent of a lemon cheesecake, this healthy breakfast recipe is easy to throw together in the morning. Or stir together the filling in a jar the night before and top with the fruit, nuts and seeds when you get to work.'
          )
          expect(item.get('photos')).to.equal([
            'http://images.media-allrecipes.com/userphotos/960x960/4027929.jpg'
          ])

          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
  // end describe('create')
})
