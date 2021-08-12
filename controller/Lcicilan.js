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

   let kode_cicilan = req.body.kode_cicilan    

    let qry = `SELECT * FROM LaporanCicilan WHERE kode_cicilan = '${kode_cicilan}'`;
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
        (kode_cicilan,student_account,nis,
            nisn,nama,tgl_bayar, buku,
            voucher_no,debit, kredit,
            uang_pangkal,seragam,
            saldo,image)
        VALUES
        ('${kode_cicilan}',
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

    let qry = `UPDATE LaporanCicilan
        Set student_account = '${student_account}',
            nis = '${nis}',	
            nisn = '${nisn}',
            nama = '${nama}',
            tg_bayar = '${tgl_bayar}',
            buku = '${buku}',
            voucher_no = '${voucher_no}',
            debit = '${debit}',
            kredit = '${kredit}',
            uang_pangkal = '${uang_pangkal}',
            seragam = '${seragam}',
            saldo = '${saldo}',
            image  = '${image}'
            WHERE kode_cicilan = '${kode_cicilan}'`

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
    let kode_cicilan = req.body.kode_cicilan

    let qry = `DELETE FROM LaporanCicilan WHERE kode_cicilan = '${kode_cicilan}'`

connection.query(qry, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        response.ok('Data Berhasil Dihapus', res)
        console.log(`Data Cicilan ${kode_cicilan} Berhasil dihapus`);
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
         console.log(`Data ${kode_cicilan} berhasil ditambahkan`);

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