// Simar
const Api_key = 'e8b53f8c-153d-4f01-8dc5-bb41a725d0d5';
// Om
// const Api_key = '95dd77b0-a58f-4e1c-85fb-9bda0bcea6e4'; 
// Bhoopi
// const Api_key = '83c8fc4b-90df-4f28-bcb5-f55ca0417884';


export const getMatches = () => {
    const url = `https://api.cricapi.com/v1/matches?apikey=${Api_key}`;

    return fetch (url)
    .then((response) => response.json())
    .catch((error) => console.log('ERROR :', error));
}


// Load match details
 export const getMatchDetails = (id) => {
    const url1 = `https://api.cricapi.com/v1/cricketScore?apikey=${Api_key}&id=${id}`;
    return fetch(url1)
    .then((response) => response.json())
    .catch((error) => console.log(error))
 }