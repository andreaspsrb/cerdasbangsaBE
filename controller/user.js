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

let getOneData = (req, res) => {

let user = req.body.user
    
let qry = `SELECT * FROM user WHERE user = '${user}'`;
    connection.query(qry, (error, result, rows) => {
     if (error) {
         console.log(error);
     } else {
         response.ok(result, res)
       console.log(result);
     }
 })
 
 }

let addOneData = (req, res) => {

    let{
        user,
        password,
        level,
        } = req.body
       
       
        let qry = `INSERT INTO user ( user, password, level) 
        VALUES('${user}', '${password}', '${level}')`
    
    connection.query(qry, (error, result, rows) => {
     if (error) {
         console.log(error);
     } else {
         response.ok(result, res)
         console.log(`Data ${user} berhasil ditambahkan`);

     }
 })
 
 }

 let editOneData = (req, res) => {
    let{
        idUser,
        user,
        password,
        level,
        } = req.body
       
        let qry = `UPDATE user 
           SET user = '${user}',
           password = '${password}',
           level = '${level}'
            WHERE idUser = '${idUser}'`

    connection.query(qry, (error, result) => {
     if (error) {
         console.log(error);
     } else {
         response.ok('Data berhasil diubah', res)
         console.log(result.affectedRows, 'Data berhasil diubah');

     }
 })
 
 }

 
 let deleteOneData = (req, res) => {
    let idUser = req.body.idUser

    let qry = `DELETE FROM artikel WHERE idUser = '${idUser}'`

    connection.query(qry, (error, result) => {
     if (error) {
         console.log(error);
     } else {
        response.ok('Data berhasil terhapus', res)
        console.log(result.affectedRows, 'Data berhasil terhapus');

     }
 })
 
 }

 let login = (req, res) => {
   let { username,
        password } = req.body

    let qry = `SELECT username, password FROM User WHERE username = '${username}' AND password = '${password}'`

    connection.query(qry, (error, result) => {
     if (result.length >0) {
         
        let data = {
            'status': 200,
            'message' :'success',
            'values': result
        };
        res.json(data);
        res.end();
     } else {
        let error = {
            'status': 500,
            'message' :'error',
            'values': 'tidak berhasil login'
        };
        res.json(error);
        res.end();
     }
 })
 
 }


module.exports = {
    getAllData,
    getOneData,
    addOneData,
    editOneData,
    deleteOneData,
    login


}