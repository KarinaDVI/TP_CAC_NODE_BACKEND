var mysql      = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'andrevivi',
    password: 'lulisara04',
    database: 'venta_de_entradas_db'
});
 
connection.connect();
module.exports = connection;