'use strict';
let response = require('../res/res');
let connection = require('../config/connect');


let getAllData = (req, res) => {

    let qry = 'SELECT * FROM seragam';
    connection.query(qry, (error, result) => {
     if (error) {
         console.log(error);
     } else {
         response.ok(result, res)
       console.log(result);
     }
 })
 
 }

 let getOneByKode = (req, res) => {

   let kode_bayar = req.body.kode_bayar    

    let qry = `SELECT * FROM seragam WHERE kode_bayar = '${kode_bayar}'`;
        connection.query(qry, (error, result) => {
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
        kode_bayar,
        nis,
        nisn,
        nama,
        tgl_bayar,
        seragam,
        debit,
        kredit,
        saldo,
        image,
        } = req.body
       
       
        let qry = `INSERT INTO seragam
        (kode_bayar, nis,
            nisn,nama,tgl_bayar, seragam,debit, kredit,
            saldo,image)
        VALUES
        ('${kode_bayar}',
            '${nis}',	
            '${nisn}',
            '${nama}',
            '${tgl_bayar}',
            '${seragam}',
            '${debit}',
            '${kredit}',
            '${saldo}',
            '${image}')`
    
    connection.query(qry, (error, result) => {
     if (error) {
         console.log(error);
     } else {
         response.ok(result, res)
         console.log(`Data ${nama} berhasil ditambahkan`);

     }
 })
 
 }

 let editOneData = (req, res) => {
    let{
        kode_bayar,
        nis,
        nisn,
        nama,
        tgl_bayar,
        seragam,
        debit,
        kredit,
        saldo,
        image,
    } = req.body

    let qry = `UPDATE seragam
        Set nis = '${nis}',	
            nisn = '${nisn}',
            nama = '${nama}',
            tgl_bayar = '${tgl_bayar}',
            seragam = '${seragam}',
            debit = '${debit}',
            kredit = '${kredit}',
            saldo = '${saldo}',
            image  = '${image}'
            WHERE kode_bayar = '${kode_bayar}'`

connection.query(qry, (error, result)=>{
    if (error) {
        console.log(error);
    } else {
        response.ok('Data berhasil diubah', res)
        console.log(result.affectedRows, 'Data Berhasil diubah');
    }
}
)
}

let deleteOneData = (req, res) => {
    let kode_bayar = req.body.kode_bayar

    let qry = `DELETE FROM seragam WHERE kode_bayar = '${kode_bayar}'`

connection.query(qry, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        response.ok('Data Berhasil Dihapus', res)
        console.log(`Data Cicilan ${kode_bayar} Berhasil dihapus`);
    }
})
}


let insertImage = (req, res) => {

    let{
        kode_bayar,
        image
        } = req.body
       
       try {


        let qry = `INSERT INTO seragam (kode_bayar, image) 
        VALUES ('${kode_bayar}', '${image}')`;
    
    connection.query(qry, (error, result, rows) => {
     if (error) {
         console.log(error);
     } else {
         response.ok(result, res)
         console.log(`Data ${kode_bayar} berhasil ditambahkan`);

     }
 }) 
       } catch (err) {
            console.log(err);
       }
     
 
 }


 module.exports = {
     getAllData,
     getOneByKode,
     addOneData,
     editOneData,
     deleteOneData,
     insertImage
 }