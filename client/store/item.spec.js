/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {getAllItems} from './item'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {
    items: [],
    singleItem: {}
  }
  const items = [
    {
      name: `Alpen Eats`,
      price: 3.6,
      stock: 120,
      description: `Go to new heights without actually having to risk your life... `,
      category: ['all', 'the unknowns', 'organic'],
      imageUrl:
        'https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/03/1024x1535/alpen-cereal-no-sugar-added.jpg?resize=980:*'
    },
    {
      name: `Cran' and 'cans`,
      price: 2.5,
      stock: 120,
      description: `Cranberry season is upon us so why wait till Thanksgiving for that first sample?`,
      category: ['all', 'the unknowns', 'organic'],
      imageUrl:
        'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/01/1483645976-purely-elizabeth-granola-puffs.jpg?crop=1.0xw:1xh;center,top&resize=980:*'
    }
  ]

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('getAllItems', () => {
    it('creates GET_ALL_ITEMS actions', () => {
      const getAllItemsAction = getAllItems(items)
      expect(getAllItemsAction.type).to.equal('GET_ALL_ITEMS')
      expect(getAllItemsAction.items).to.equal(items)
    })
  })
})
