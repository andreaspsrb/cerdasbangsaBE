'use strict';
let response = require('../res/res');
let connection = require('../config/connect');
 

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


 module.exports = {
     getAllData,
     getOneByKode,
     addOneData
 }