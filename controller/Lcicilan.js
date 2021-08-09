'use strict';
let response = require('../res/res');
let connection = require('../config/connect');
const multer = require('multer')
 const upload = multer({
     dest:'public/img/cicilan'
 })

exports.uploadImage = upload.single('photo');

let getAllData = (req, res) => {

    let qry = 'SELECT * FROM LaporanCicilan';
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

   let kode_cicilan = req.body.kode_cicilan    

    let qry = `SELECT * FROM LaporanCicilan WHERE kode_cicilan = '${kode_cicilan}'`;
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
        kode_cicilan,
        student_account,
        nis,
        nisn,
        nama,
        tgl_bayar,
        buku,
        voucher_no,
        debit,
        kredit,
        uang_pangkal,
        seragam,
        saldo,
        image,
        } = req.body
       
       
        let qry = `INSERT INTO LaporanCicilan
        VALUES('${kode_cicilan}',
            '${student_account}',
            '${nis}',	
            '${nisn}',
            '${nama}',
            '${tgl_bayar}',
            '${buku}',
            '${voucher_no}',
            '${debit}',
            '${kredit}',
            '${uang_pangkal}',
            '${seragam}',
            '${saldo}',
            '${image}')`
    
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
        kode_cicilan,
        image
        } = req.body
       
       try {


        let qry = `INSERT INTO LaporanCicilan (kode_cicilan, image) 
        VALUES ('${kode_cicilan}', '${image}')`;
    
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