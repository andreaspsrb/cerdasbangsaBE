'use strict';
let response = require('../res/res');
let connection = require('../config/connect');
const multer = require('multer')
 const upload = multer({
     dest:'public/img/spp'
 })

exports.uploadImage = upload.single('photo');

let getAllData = (req, res) => {

    let qry = 'SELECT * FROM LaporanSPP';
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

   let kode_spp = req.body.kode_spp    

    let qry = `SELECT * FROM LaporanSPP WHERE kode_spp = '${kode_spp}'`;
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
        kode_spp,
        tgl_bayar,
        bulan,	
        jumlah,
        ekstrakurikuler,
        status,
        image,
        nama_siswa,
        kelas,
    
        } = req.body
       
       
        let qry = `INSERT INTO LaporanSPP
        VALUES('${kode_spp}',
            '${tgl_bayar}',
            '${bulan}',	
            '${jumlah}',
            '${ekstrakurikuler}',
            '${status}',
            '${image}',
            '${nama_siswa}',
            '${kelas}',)`
    
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
        kode_spp,
        image
        } = req.body
       
       try {


        let qry = `INSERT INTO LaporanSPP (kode_spp, image) 
        VALUES ('${kode_spp}', '${image}')`;
    
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