import { GET_APPLICATION, CREATE_APPLICATION, DELETE_PROJECT } from '../types'

const initialState = {
  items: [],
}

export default function ( state = initialState, action ) {

  switch (action.type) {
    case GET_APPLICATION:
      console.log(action.payload)
      return {
        ...state,
        items: action.payload,
      }
    case CREATE_APPLICATION:
      return {
        ...state,
        items: [ action.payload, ...state.items ]
      }
    case DELETE_PROJECT:
      return {
        ...state,
        items: state.items.filter(app => app._id !== action.payload._id)
      }
    default:
      return state
  }

}