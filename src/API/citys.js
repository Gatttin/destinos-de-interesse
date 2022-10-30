// https://amazon-api.sellead.com/city

const BASE_URL = 'https://amazon-api.sellead.com';

export const fetchCitys = () => {
    const url = `${BASE_URL}/city`;
    return fetch(url).then(response => response.json());
};
