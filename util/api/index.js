import user from './controllers/user'
import Authorizor from './libs/authorizationManager'

// always load token before use
Authorizor.loadToken()

export default {
    user,
}