import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tanso-app-bbf33.firebaseio.com/"
})

export default instance;