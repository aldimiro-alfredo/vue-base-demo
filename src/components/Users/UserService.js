import axios from 'axios';

export default {

    async listingUsers() {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    },

    async getUserAPI(){

        return axios.get('http://127.0.0.1:3000/api/v1/users')
    }

}