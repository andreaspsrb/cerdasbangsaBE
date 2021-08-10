'use strict';
let response = require('../res/res');
let connection = require('../config/connect');
const multer = require('multer')
 const upload = multer({
     dest:'public/img/bulanan'
 })

exports.uploadImage = upload.single('photo');

let getAllData = (req, res) => {

    let qry = 'SELECT * FROM LaporanBulanan';
    connection.query(qry, (error, result, rows) => {
     if (error) {
         console.log(error);
     } else {
         response.ok(result, res)
       console.log(result);
     }
 })
 
 }

 let getOneByKode = (req, res) => {

   let kode_laporan = req.body.kode_laporan   

    let qry = `SELECT * FROM LaporanBulanan WHERE kode_laporan = '${kode_laporan}'`;
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
        kode_laporan,
        tgl,
        keterangan,
        debit,
        kredit,
        saldo,
        jumlah,
        status,
       
        } = req.body
       
       
        let qry = `INSERT INTO LaporanBulanan
        VALUES('${kode_laporan}',
            '${tgl}',
            '${keterangan}',
            '${debit}',
            '${kredit}',
            '${saldo}',
            '${jumlah}',
            '${status}')`
    
    connection.query(qry, (error, result, rows) => {
     if (error) {
         console.log(error);
     } else {
         response.ok(result, res)
         console.log(`Data ${nama} berhasil ditambahkan`);

     }
 })
 
 }

let insertImage = (req, res) => {

    let{
        kode_laporan,
        image
        } = req.body
       
       try {


        let qry = `INSERT INTO LaporanBulanan (kode_laporan, image) 
        VALUES ('${kode_laporan}', '${image}')`;
    
    connection.query(qry, (error, result, rows) => {
     if (error) {
         console.log(error);
     } else {
         response.ok(result, res)
         console.log(`Data ${nama} berhasil ditambahkan`);

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
     insertImage
 }