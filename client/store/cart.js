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

const addItem = (name, photo, price, quantity) => ({
  type: ADD_ITEM,
  name,
  photo,
  price,
  quantity
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

// add thunks here
// thunks will update database and return relevant data
// then update the store
// then calcualte total
// then update the store again

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newItem = {
        name: action.name,
        photo: action.photo,
        price: action.price,
        quantity: action.quantity
      }
      return {
        ...state,
        cartItems: [...action.items, newItem]
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
