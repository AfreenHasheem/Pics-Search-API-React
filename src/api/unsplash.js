import axios from 'axios';

export async function getPicture (token, searchTerm) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${token}`
        },
        params: { query: searchTerm },       
    });
    console.log(response);
    return response;
};
