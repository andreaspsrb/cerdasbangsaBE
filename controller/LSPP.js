'use strict';
let response = require('../res/res');
let connection = require('../config/connect');
const random = require('random-number')

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
    let kode_spp = req.body 
    let qry = 
    `SELECT  * FROM LaporanSPP WHERE kode_spp = '${kode_spp}'`;
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
    let kode_spp = random.generator({
        min:  0,
        max:9999,
        integer:true,
    })
    let{
        tgl_bayar,
        bulan,	
        jumlah,
        ekstrakurikuler,
        status,
        nama_siswa,
        kelas,
        id_user,
    
        } = req.body
       let image = req.protocol + "://" + req.get("host") +"/upload/" + req.file.filename
       console.log(image);
        let qry = `INSERT INTO LaporanSPP
        VALUES('${kode_spp()}',
            '${tgl_bayar}',
            '${bulan}',	
            '${jumlah}',
            '${ekstrakurikuler}',
            '${status}',
            '${image}',
            '${nama_siswa}',
            '${kelas}',
            '${id_user}')`
    
    connection.query(qry, (error, result) => {
     if (error) {
         console.log(error);
     } else {
         response.ok(result, res)
         console.log(`Data ${nama_siswa} berhasil ditambahkan`);

     }
 })
 }

 let editOneData = (req, res) => {
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

    let qry = `UPDATE LaporanSPP
        Set tgl_bayar = '${tgl_bayar}',
            bulan = '${bulan}',	
            jumlah = '${jumlah}',
            ekstrakurikuler = '${ekstrakurikuler}',
            status = '${status}',
            image = '${image}',
            nama_siswa = '${nama_siswa}',
            kelas = '${kelas}'
            WHERE kode_spp ='${kode_spp}'`

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
    let kode_spp = req.body.kode_spp

    let qry = `DELETE FROM LaporanSPP WHERE kode_spp = '${kode_spp}'`

connection.query(qry, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        response.ok('Data Berhasil Dihapus', res)
        console.log(`Data SPP ${kode_spp} Berhasil dihapus`);
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
     editOneData,
     deleteOneData,
     insertImage
 }