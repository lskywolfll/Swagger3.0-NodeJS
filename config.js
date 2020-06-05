require('dotenv').config();

const config = {

    //PUERTO PARA LA APLICACION y nombre del host para decirle a transbank donde realizar las peticiones de respuesta
    port: process.env.PORT,
    hostName: process.env.HOSTNAME_API,
    //HOST
    host: process.env.HOST,
    //bd
    CREDENTIALS_DB_SERVER: process.env.CREDENTIALS_DB_SERVER,
    CREDENTIALS_DB_USER: process.env.CREDENTIALS_DB_USER,
    CREDENTIALS_DB_PASSWORD: process.env.CREDENTIALS_DB_PASSWORD,
    CREDENTIALS_DB_DATABASE: process.env.CREDENTIALS_DB_DATABASE,
};

module.exports = config;