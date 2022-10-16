import axios from 'axios'

let instance = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
})

export default instance;