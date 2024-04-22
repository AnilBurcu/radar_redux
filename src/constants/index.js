export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
        bl_lat: '34.39',
        bl_lng: '24.8',
        tr_lat: '43.43',
        tr_lng: '44.9',
        limit: '300'
    },
    headers: {
        'X-RapidAPI-Key': 'acd257a390mshc36fbf0e17b4a24p198b66jsnf222ca17be11',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
};