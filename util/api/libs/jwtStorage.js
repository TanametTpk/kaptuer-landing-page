import Cookies from 'universal-cookie';
const TOKEN = "jwtToken"

const cookies = new Cookies();

const save = (value) => {

    cookies.set(TOKEN, value, { path: '/' , domain: ".kaptuer.com" });

}

const load = () => cookies.get(TOKEN)

const clear = () => cookies.remove(TOKEN)

export default {

    save,
    load,
    clear

}