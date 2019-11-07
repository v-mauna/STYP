import axios from 'axios'

const CREATE_ORDER = 'CREATE_ORDER'
const GET_ALL_ORDERS = 'GET_ALL_ORDERS'
const GET_ONE_ORDER = 'GET_ONE_ORDER'

const initialState = {
  orders: [],
  order: {}
}

const getAllOrders = orders => ({
  type: GET_ALL_ORDERS,
  orders
})

const getOneOrder = order => ({
  type: GET_ONE_ORDER,
  order
})

const createOrder = newOrder => ({
  type: CREATE_ORDER,
  newOrder
})

//Thunks

export const fetchAllOrders = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/orders')
      dispatch(getAllOrders(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const fetchOneOrder = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/orders/${id}`)
      dispatch(getOneOrder(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const createNewOrder = (id, newOrder) => {
  return async dispatch => {
    try {
      const {data} = await axios.post('api/orders', newOrder)
      dispatch(createOrder(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//Reducers

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS: {
      return action.orders
    }
    case GET_ONE_ORDER: {
      return {...state, order: action.order}
    }
    case CREATE_ORDER: {
      return {...state, orders: [...state.orders, action.order]}
    }
    default:
      return state
  }
}

export default ordersReducer
