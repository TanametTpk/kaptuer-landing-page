import axios from 'axios'
import API from '../../../configs/apis'
import Authorizor from '../libs/authorizationManager'
import executeHandler from '../libs/executeHandler'

const USER = API.USER

const createUser = async ( payload, errorHandler) => {

    return await axios.post(USER + "/user" , payload).catch(executeHandler(errorHandler))

}

const login = async (payload, errorHandler) => {

    let res = await axios.post(USER + "/user/validate" , payload).catch(executeHandler(errorHandler))

    if (!res) return res

    let token = res.data.token

    // save token
    if (token) {
        Authorizor.setToken(token)
    }

    return res

}

const logout = () => {

    // remove token
    Authorizor.clear()

}

const isLogin = () => {

    let token = Authorizor.loadToken()
    return token ? token.length > 0 : false

}

const requestVerify = async (payload , errorHandler) => {
    return await axios.post(USER + "/user/requestVerify" , payload).catch(executeHandler(errorHandler))
}

const requestRecoveryPassword = async (payload , errorHandler) => {
    return await axios.post(USER + "/user/forgetPassword" , payload).catch(executeHandler(errorHandler))
}

const resetPassword = async (payload, errorHandler) => {
    return await axios.put(USER + "/user" , payload).catch(executeHandler(errorHandler))
}

export default {
    createUser,
    login,
    logout,
    isLogin,
    requestRecoveryPassword,
    requestVerify,
    resetPassword
}