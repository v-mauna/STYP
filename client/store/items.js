import axios from 'axios'
import history from '../history'

/* ACTION TYPES */
const GOT_CEREALS = 'GOT_CEREALS'

/* INITIAL STATE */
const defaultProducts = []

/* ACTION CREATORS */
export const gotCereals = cereals => ({
  type: GOT_CEREALS,
  cereals
})

/**
 * THUNK CREATORS
 */
export function getCereals() {
  return async dispatch => {
    try {
      const response = await axios.get('/api/cereals')
      dispatch(gotCereals(response.data || defaultProducts))
    } catch (error) {
      console.log(error)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = defaultProducts, action) {
  switch (action.type) {
    case GOT_CEREALS:
      return action.cereals
    default:
      return state
  }
}
