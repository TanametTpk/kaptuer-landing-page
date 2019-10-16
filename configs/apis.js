const SERVER_URL = process.env.SERVER_URL || "http://158.108.30.70:9007"
const APP_URL = process.env.APP_URL || "https://app.kaptuer.com"

export default {

    USER        : SERVER_URL + "/user",
    APP         : APP_URL

}
