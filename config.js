require('dotenv').config();

const config = {

    //PUERTO PARA LA APLICACION y nombre del host para decirle a transbank donde realizar las peticiones de respuesta
    port: process.env.PORT,
    hostName: process.env.HOSTNAME_API,

    //HOST
    host: process.env.HOST,
    //SENGRID API KEY
    sengridApiKey: process.env.SENGRID_API_KEY,

    //AZURE BLOB
    azureBlobConnectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
    azureBlobClave: process.env.AZURE_STORAGE_CLAVE,
    azureBlobHostName: process.env.BLOB_HOST_NAME,

    //transbank
    transbankResponseUrl: process.env.TRANSBANK_RESPONSE,
    transbankFinalUrl: process.env.TRANSBANK_FINAL,
    //respuesta 
    urlWebReact: process.env.URL_WEB_REACT,

    //bd
    CREDENTIALS_DB_SERVER: process.env.CREDENTIALS_DB_SERVER,
    CREDENTIALS_DB_USER: process.env.CREDENTIALS_DB_USER,
    CREDENTIALS_DB_PASSWORD: process.env.CREDENTIALS_DB_PASSWORD,
    CREDENTIALS_DB_DATABASE: process.env.CREDENTIALS_DB_DATABASE,
    LA_VACA_USER_EMAIL: process.env.LA_VACA_USER_EMAIL
};

module.exports = config;