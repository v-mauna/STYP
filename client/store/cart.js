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

export const addItem = item => ({
  type: ADD_ITEM,
  item
})

const removeItem = item => ({
  type: REMOVE_ITEM,
  item
})

const changeQuantity = (item, quantity) => ({
  type: CHANGE_QUANTITY,
  item,
  quantity
})

const updateTotal = total => ({
  type: UPDATE_TOTAL,
  total
})

const checkout = () => ({
  type: CHECKOUT
})

//thunks will go here

const cartReducer = (state = initialState, action) => {
  let tempState, searchId

  switch (action.type) {
    case ADD_ITEM: {
      const addedItem = action.item
      searchId = state.cartItems.findIndex(el => el.item.id === addedItem.id)
      if (searchId !== -1) {
        state.cartItems[searchId].quantity++
        tempState = {
          ...state,
          cartItems: [...state.cartItems]
        }
      } else {
        tempState = {
          ...state,
          cartItems: [...state.cartItems, {item: addedItem, quantity: 1}]
        }
      }
      localStorage.setItem('cart', JSON.stringify(tempState))
      return tempState
    }

    case REMOVE_ITEM: {
      const itemToRemove = action.item
      tempState = {
        ...state,
        cartItems: state.cartItems.filter(el => el.item.id !== itemToRemove.id)
      }
      localStorage.setItem('cart', JSON.stringify(tempState))
      return tempState
    }

    case CHANGE_QUANTITY: {
      const itemToChange = action.item
      const newQuantity = action.quantity
      searchId = state.cartItems.findIndex(el => el.item.id === itemToChange.id)
      if (newQuantity) {
        tempState = state.cartItems[searchId].quantity = action.quantity
      } else {
        removeItem(itemToChange)
      }
      localStorage.setItem('cart', JSON.stringify(tempState))
      return tempState
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
