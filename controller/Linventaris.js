'use strict';
let response = require('../res/res');
let connection = require('../config/connect');
const multer = require('multer')
 const upload = multer({
     dest:'public/img/inventaris'
 })

exports.uploadImage = upload.single('photo');

let getAllData = (req, res) => {

    let qry = 'SELECT * FROM LaporanInventaris';
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

   let kode_inventaris = req.body.kode_inventaris    

    let qry = `SELECT * FROM LaporanInventaris WHERE kode_inventaris = '${kode_inventaris}'`;
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
        kode_inventaris,
        tgl_pembelian,
        keterangan,	
        jumlah,
        catatan,
        tahun_ajaran,
        wali_kelas,
        image,
    
        } = req.body
       
       
        let qry = `INSERT INTO LaporanInventaris
        VALUES('${kode_inventaris}',
            '${tgl_pembelian}',
            '${keterangan}',	
            '${jumlah}',
            '${catatan}',
            '${tahun_ajaran}',
            '${wali_kelas}',
            '${image}')`
    
    connection.query(qry, (error, result, rows) => {
     if (error) {
         console.log(error);
     } else {
         response.ok(result, res)
         console.log(`Data ${nama_siswa} berhasil ditambahkan`);

     }
 })
 
 }

let insertImage = (req, res) => {

    let{
        kode_inventaris,
        image
        } = req.body
       
       try {


        let qry = `INSERT INTO LaporanInventaris (kode_inventaris, image) 
        VALUES ('${kode_inventaris}', '${image}')`;
    
    connection.query(qry, (error, result, rows) => {
     if (error) {
         console.log(error);
     } else {
         response.ok(result, res)
         console.log(`Data ${nama_siswa} berhasil ditambahkan`);

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