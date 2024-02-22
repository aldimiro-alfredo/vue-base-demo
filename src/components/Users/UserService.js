import axios from 'axios';

export default {

    async listingUsers() {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    }

}