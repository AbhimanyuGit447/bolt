import axios from 'axios';

export default axios.create({

    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6c446b49b72a4c559d9b9d67183d5c1de1981d16f309063c3b994086e6ce1a26'
      }

});