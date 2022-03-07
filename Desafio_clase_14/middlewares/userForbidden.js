const userForbidden = (req, res, next) => {
    const {method, url} = req;
    const user = false;
    if (user===false) {
        res.status(403).send({
            'Error': -1,
            'Método prohibido': method,
            'Ruta no autorizada':url
        });
    }
    else {
       next();
    }
}
module.exports = userForbidden;