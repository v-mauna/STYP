import axios from 'axios'

const initialState = {
  items: [],
  singleItem: {}
}

const GET_ALL_ITEMS = 'GET_ALL_ITEMS'
const GET_ONE_ITEM = 'GET_ONE_ITEM'
const CREATE_ITEM = 'CREATE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'
const DELETE_ONE_ITEM = 'DELETE_ONE_ITEM'

const getAllItems = items => ({
  type: GET_ALL_ITEMS,
  items
})

const getOneItem = item => ({
  type: GET_ONE_ITEM,
  singleItem: item
})

const updateItem = (id, item) => ({
  type: UPDATE_ITEM,
  id,
  item
})

const createItem = newItem => ({
  type: CREATE_ITEM,
  newItem
})

const deleteOneItem = id => ({
  type: DELETE_ONE_ITEM,
  id
})

//Thunks

export const fetchAllItems = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/items')
      dispatch(getAllItems(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const fetchOnelItem = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/items/${id}`)
      dispatch(getOneItem(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const fetchCreateItem = newItem => {
  return async dispatch => {
    try {
      await axios.post('/api/items/', newItem)
      const {data} = await axios.get('/api/items')
      dispatch(getAllItems(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const fetchUpdateItem = (id, newItem) => {
  return async dispatch => {
    try {
      await axios.put(`/api/items/${id}`, newItem)
      const {data} = await axios.get(`/api/items/${id}`)
      dispatch(getOneItem(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const fetchDeleteItem = id => {
  return async dispatch => {
    await axios.delete(`/api/items/${id}/`)
    const {data} = await axios.get(`/api/items/`)
    dispatch(getAllItems(data))
  }
}

//Reducer

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS: {
      return {
        ...state,
        items: action.items
      }
    }
    case GET_ONE_ITEM: {
      return {
        ...state,
        singleItem: action.item
      }
    }
    case UPDATE_ITEM: {
      let itemsDup = [...state.items]
      itemsDup = itemsDup.map(item => {
        if (item.id === action.id) {
          return action.item
        }
        return item
      })
      return itemsDup
    }
    case DELETE_ONE_ITEM: {
      let itemsDup = [...state.items]
      const deletedItem = action.id
      itemsDup = itemsDup.filter(item => item.id !== deletedItem)
      return itemsDup
    }

    default:
      return state
  }
}

export default itemsReducer
