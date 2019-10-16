import axios from 'axios';

 export default axios.create()({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ff14e58ac546d849ea03a9a11ea6f74e15abb607890a10779cff223f46cb499d'
    }
});
