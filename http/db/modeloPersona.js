var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Persona = sequelize.define('personas', {
        Nombre: Sequelize.STRING,
        Telefono: Sequelize.STRING,
        Correo: Sequelize.STRING,
        Mensaje: Sequelize.TEXT,
    })

    return Persona;

};

module.exports = ex;
