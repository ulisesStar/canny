var mysql = require('mysql');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('canny', 'root', 'root', {
    host: '23.236.55.228',
    dialect: 'mysql',
    port: '4306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize.sync()
    .then(function() {
        console.log('Connecion realizada');
    })
    .catch(function(err) {
        console.log('No se puede conectar a la bd:', err);
    }
);

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
