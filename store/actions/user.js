import { LOGIN, LOGOUT } from '../types'
import API from '../../util/api'

export const logIn = (payload) => async dispatch => {

  let res = await API.user.login(payload)
  if (!res) return false
  else {
    dispatch({
      type: LOGIN,
      payload: res.data.user
    })
    return true;
  }
}

export const logOut = () => async dispatch => {

  await API.user.logout();

  dispatch({
    type: LOGOUT
  })
}