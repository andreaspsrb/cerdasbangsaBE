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
let username = req.body.username
    
let qry = `SELECT * FROM user WHERE user = '${username}'`;
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
        username,
        password,
        level,
        } = req.body
       
       
        let qry = `INSERT INTO user ( user, password, level) 
        VALUES('${username}', '${password}', '${level}')`
    
    connection.query(qry, (error, result, rows) => {
     if (error) {
         console.log(error);
     } else {
         response.ok(result, res)
         console.log(`Data ${username} berhasil ditambahkan`);

     }
 })
 
 }

 let editOneData = (req, res) => {
    let{
        idUser,
        username,
        password,
        level,
        } = req.body
       
        let qry = `UPDATE user 
           SET user = '${username}',
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

     let qry =`SELECT u.username, u.password, u.role, s.* FROM User u 
     LEFT JOIN siswa s ON s.nis = u.username
    WHERE username = '${username}' AND password = '${password}'`
     
    //  `SELECT username, password, role FROM User WHERE username = '${username}' AND password = '${password}'`
 
     connection.query(qry, (error, result) => {
    //    cek isi data 
        console.log(result); 
        // cek query
        console.log(qry);
      if (result.length > 0) {

         let data = {
             'status': 200,
             'message' :'success',
             'values': result
         };
         res.json(data);
         res.end();
      } else if (result.length == 0) {
         let err = {
             'status': 500,
             'message' :'error',
             'values': 'data tidak ada'

         };
         res.json(err);
         res.end();
        }
         else  {
            let err = {
                'status': 500,
                'message' :'error',
                'values': 'tidak berhasil login',
                'detail': error
            };
         res.json(err);
         res.end();
      }
  })
  
  }





module.exports = {
    getAllData,
    getOneData,
    addOneData,
    editOneData,
    login,
    deleteOneData


}