'use strict';
let response = require('../res/res');
let connection = require('../config/connect');
 

let getAllData = (req, res) => {

   let qry = 'SELECT * FROM user';
   connection.query(qry, (error, result, rows) => {
    if (error) {
        console.log(error);
    } else {
        response.ok(result, res)
      console.log(result);
    }
})

}






module.exports = {
    getAllData

}