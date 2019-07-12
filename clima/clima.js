const axios = require('axios'); //axios funciona con promesas


const getClima = async (lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&appid=a98d51251b7bde10189a76528c9cb9a7&lon=${ lon }&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}