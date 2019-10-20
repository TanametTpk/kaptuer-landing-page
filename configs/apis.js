const SERVER_URL = process.env.SERVER_URL || "https://api.backend.kaptuer.com"
const APP_URL = process.env.APP_URL || "https://app.kaptuer.com"

export default {

    USER        : SERVER_URL + "/user",
    APP         : APP_URL

}
