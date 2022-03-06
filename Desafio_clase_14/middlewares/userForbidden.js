const userForbidden = (req, res, next) => {
    const {method, url} = req;
    const user = false;
    if (user) {
        next();
    }
    else {
        res.status(403).send({
            'Error': -1,
            'Método prohibido': method,
            'Ruta no autorizada':url
        });
    }
}
module.exports = userForbidden;