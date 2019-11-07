import axios from 'axios'

const initialState = {
  cartItems: [],
  total: 0
}

const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
const UPDATE_TOTAL = 'UPDATE_TOTAL'
const CHECKOUT = 'CHECKOUT'

export const addItem = addedItem => ({
  type: ADD_ITEM,
  addedItem
})

const removeItem = id => ({
  type: REMOVE_ITEM,
  id
})

const changeQuantity = (id, quantity) => ({
  type: CHANGE_QUANTITY,
  id,
  quantity
})

const updateTotal = total => ({
  type: UPDATE_TOTAL,
  total
})

const checkout = () => ({
  type: CHECKOUT
})

// const addToCart = () => {
//   return async dispatch => {

//   }
// }
//thunks will go here

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newItem = action.addedItem

      return {
        ...state,
        cartItems: [...state.cartItems, newItem]
      }
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.id)
      }
    }
    case CHANGE_QUANTITY: {
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === action.id) item.quantity = action.quantity
        })
      }
    }
    case UPDATE_TOTAL: {
      return {
        ...state,
        total: action.total
      }
    }
    case CHECKOUT: {
      return {
        state: initialState
      }
    }
    default:
      return state
  }
}

export default cartReducer
