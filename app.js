const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obterner el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log); //el console.log no tiene parámetros, imprime el objeto devuelto por la promesa

// clima.getClima(52.369999, 4.890000)
//         .then(console.log)
//         .catch(console.log);

const getInfo = async (direccion) => {

    try {
        const location = await lugar.getLugarLatLon(direccion);
        const weather = await clima.getClima(location.lat, location.lon);
        return `El clima de ${ location.direccion } es de ${ weather }°C`;
    }
    catch(err) {
        console.log('No se pudo obtener el clima', err);
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);