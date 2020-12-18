
async function connect(){
    if (global.connection && global.connection.state !== 'disconnected') return global.connection;
    if (global.connection && global.connection.state !== 'disconnected') global.connectionstate = "Conectado";
    const mysql = require('mysql2/promise');
    const config = require('../config.json');
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/vrp");
    console.log("[DATABASES] : Conectado");
    global.connection = connection;
    return connection;
}
connect();

module.exports = {}

/*mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASS,
    database: config.database
}).then(() => console.log(`[DB] connected at ${database}`)).catch(err => console.log(err));
*/