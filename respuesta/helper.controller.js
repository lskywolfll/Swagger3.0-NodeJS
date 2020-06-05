
const logger = require('../utils/logger')
const dateFormat = require('dateformat');
const now = new Date();

/* Funcionalidades para manejar los Status HTTP de Salida a las Peticiones
Creador : Hackmonkeys
Fecha   : 10 de Mayo 
Ultima Modificación ; Miguel Pastenes

*/

function handleErrorResponse(nameController, nameMethod, err, res) {
    if (err) {
        logger.error(dateFormat(now, 'default') + '-->' + nameController + 'Metodo :' + nameMethod + '-> data : ' + JSON.stringify(err));
        res.status(err.code).send(err);

    } else {
        handleGenericErrorResponse(nameController, nameMethod, err, res)
    }
}

function handleGenericErrorResponse(nameController, nameMethod, err, res) {
    logger.error(dateFormat(now, 'default') + '-->' + nameController + 'Metodo :' + nameMethod + '-> data : ' + JSON.stringify(err));

    const jsonResultFailed = {
        error: {
            code: 500,
            message: 'Internal Application Error in ${' + nameMethod + '} ' + err.mensaje

        }
    }

    res.status(500).send(jsonResultFailed);
}

function handleGenericDataResponse(nameController, nameMethod, data, res) {

    logger.info(dateFormat(now, 'default') + '-->' + nameController + 'Metodo :' + nameMethod + '-> data : ' + JSON.stringify(data));

    if (data.code) {
        res.status(data.code).send(data);
    }
    else {
        res.status(200).send(data);
    }

}

function handleCreatedDataResponse(nameController, nameMethod, data, res) {
    logger.info(dateFormat(now, 'default') + '-->' + nameController + 'Metodo :' + nameMethod + '-> data : ' + JSON.stringify(data));
    res.status(201).send(data);
}

function handleEmptyDataResponse(nameController, nameMethod, data, res) {

    logger.info(dateFormat(now, 'default') + '-->' + nameController + 'Metodo :' + nameMethod + '-> data : ' + JSON.stringify(data));
    res.status(204).send();
}




module.exports = {
    handleErrorResponse,
    handleGenericErrorResponse,
    handleGenericDataResponse,
    handleCreatedDataResponse,
    handleEmptyDataResponse
};
