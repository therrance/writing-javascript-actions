const request = require('request-promise');

const options = {
    method: 'GET',
    uri: 'https://icanhazdadjoke.com/',
    headers: {
        'Accept': 'application/json',
        'User-Agent': 'Writing JavaScript action GitHub Skills coutse.'},
    json: true
};

async function getJoke() {
    const joke = await request(options);
    return joke.joke;
}

module.exports = getJoke;