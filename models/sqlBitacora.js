const mysql2 = require('mysql2');

const bitacora = mysql2.createPool({
  host: '193.203.166.182',
  user: 'u581595639_edgarmsoporte',
  database: 'u581595639_Bitacora',
  password: 'MiLu_1208.$-',
  waitForConnections: true,
  connectionLimit: 100000
});

module.exports = bitacora;