var db = require('../relations');
var persona = db.persona;

var ex = module.exports = {};

ex.create = function (req, res, next) {

    var data = req.body;

    persona.create({
        Nombre: req.body.Nombre,
        Edad: req.body.Edad
    })
    .then(function () {
        res.status(200).jsonp(req.body);
    });
};

ex.read = function (req, res, next) {

    var id = req.params.id;

    if (id) {
        persona.findById(id)
                .then(function (persona) {
                    res.status(200).jsonp(persona);
                });
    } else {
        persona.findAll()
                .then(function (personas) {
                    res.status(200).jsonp(personas);
                });
    }
};
