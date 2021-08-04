// const mysql2 = require('mysql2');
let dotenv = require('dotenv');
let env = dotenv.config();
const mysql2 = require('mysql2');
const conn = mysql2.createConnection({
    host: process.env.heri_HOST,
    user: process.env.heri_USERNAME,
    password: process.env.heri_PASSWORD,
    database: process.env.heri_DATABASE,
})


conn.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('Mysql terkoneksi');
    }
})
  
//   function handleDisconnect() {
//     conn.connect(function(err) {              // The server is either down
//       if(err) {                                     // or restarting (takes a while sometimes).
//         console.log('error when connecting to db:', err);
//         setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//       }                                     // to avoid a hot loop, and to allow our node script to
//     });                                     // process asynchronous requests in the meantime.
//                                             // If you're also serving http, display a 503 error.
//     conn.on('error', function(err) {
//       console.log('db error', err);
//       if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//         handleDisconnect();                         // lost due to either server restart, or a
//       } else {                                      // connnection idle timeout (the wait_timeout
//         throw err;                                  // server variable configures this)
//       }
//     });
//   }
  
//   handleDisconnect();



module.exports = conn;