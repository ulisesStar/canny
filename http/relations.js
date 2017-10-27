
//*-*-*-CONEXION CON SEQUELIZE & MYSQL-*-*-*-*-*-*-*
var conector = require('./connection');

//- Modelos

var persona = require('./db/modeloPersona')(conector);
var usuario = require('./db/modeloUsuario')(conector);

//- Relations

module.exports.persona = persona;
module.exports.usuario = usuario;
