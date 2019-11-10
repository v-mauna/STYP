/* eslint-disable complexity */
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
const RESTORE_CART_ITEMS = 'RESTORE_CART_ITEMS'

export const addItem = item => ({
  type: ADD_ITEM,
  item
})

export const getRestoreCartItemsFromLocalStorage = myCartArray => ({
  type: RESTORE_CART_ITEMS,
  myCartArray
})

export const removeItem = item => ({
  type: REMOVE_ITEM,
  item
})

export const changeQuantity = (itemId, quantity) => ({
  type: CHANGE_QUANTITY,
  itemId,
  quantity
})

const updateTotal = total => ({
  type: UPDATE_TOTAL,
  total
})

const checkout = () => ({
  type: CHECKOUT
})

export const restoreCartItemsFromLocalStorage = () => {
  return async dispatch => {
    try {
      // localStorage.clear() // todo remove!!!
      //
      //setting local storage
      if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]))
      }
      let myCartArray = JSON.parse(localStorage.getItem('cart'))

      dispatch(getRestoreCartItemsFromLocalStorage(myCartArray))
    } catch (err) {
      console.error('Error', err)
    }
  }
}
//thunks will go here

// eslint-disable-next-line max-statements
const cartReducer = (state = initialState, action) => {
  let tempState, searchId
  switch (action.type) {
    case RESTORE_CART_ITEMS: {
      return {...state, cartItems: action.myCartArray}
    }
    case ADD_ITEM: {
      if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]))
      }
      state.cartItems = JSON.parse(localStorage.getItem('cart'))
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
      localStorage.setItem('cart', JSON.stringify(tempState.cartItems))
      return tempState
    }

    case REMOVE_ITEM: {
      if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]))
      }
      state.cartItems = JSON.parse(localStorage.getItem('cart'))
      const itemToRemove = action.item
      let tempState = {
        ...state,
        cartItems: state.cartItems.filter(el => el.item.id !== itemToRemove.id)
      }
      localStorage.setItem('cart', JSON.stringify(tempState.cartItems))
      return tempState
    }

    case CHANGE_QUANTITY: {
      const itemIdToChange = action.itemId
      const newQuantity = action.quantity
      searchId = state.cartItems.findIndex(el => el.item.id === itemIdToChange)
      if (Number(newQuantity) > 0) {
        state.cartItems[searchId].quantity = action.quantity
        tempState = {...state}
      } else {
        tempState = {
          ...state,
          cartItems: state.cartItems.filter(el => el.item.id !== itemIdToChange)
        }
      }
      localStorage.setItem('cart', JSON.stringify(tempState.cartItems))
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
