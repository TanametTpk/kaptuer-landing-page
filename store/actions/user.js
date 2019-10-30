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

export const forgetPassword = (errorHandler) => async dispatch  => {

  // dispatch()

  return await API.user.requestRecoveryPassword(errorHandler)

}

export const resetPassword = (payload, errorHandler) => async dispatch  => {

  // dispatch()

  return await API.user.resetPassword(payload, errorHandler)
}

export const requestRecoveryPassword = (payload, errorHandler) => async dispatch => {
  return await API.user.requestRecoveryPassword(payload, errorHandler)
}