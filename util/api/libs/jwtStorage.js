const TOKEN = "jwtToken"

const save = (value) => {

    localStorage.setItem(TOKEN, value)

}

const load = () => localStorage.getItem(TOKEN)

const clear = () => localStorage.removeItem(TOKEN)

export default {

    save,
    load,
    clear

}