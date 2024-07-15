var mysql      = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'Lucila',
    password: 'Lucila79',
    database: 'venta_entradasdb.sql'
});

connection.connect();
module.exports = connection;