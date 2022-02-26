
import axios from 'axios'


const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyDI5f7IytwXlVZ2-AtdZ2div8LG2vTX1-Y'
    }
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default authApi


