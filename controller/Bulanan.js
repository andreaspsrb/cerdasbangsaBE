'use strict';
let response = require('../res/res');
let connection = require('../config/connect');

let getAllData = (req, res) => {

    let qry = 'SELECT * FROM LaporanBulanan';
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
        ( kode_laporan,tgl,
            keterangan,debit,
            kredit,saldo,
            jumlah, status )
        VALUES
        ('${kode_laporan}',
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
         console.log(`Data Laporan ${kode_laporan} berhasil ditambahkan`);

     }
 })
 
 }

 let editOneData = (req, res) => {
    let{ kode_laporan,
        tgl,
        keterangan,
        debit,
        kredit,
        saldo,
        jumlah,
        status,
    } = req.body

    let qry = `UPDATE LaporanBulanan
        Set tgl =  '${tgl}',
            keterangan = '${keterangan}',
            debit = '${debit}',
            kredit = '${kredit}',
            saldo = '${saldo}',
            jumlah = '${jumlah}',
            status = '${status}'
            WHERE kode_laporan ='${kode_laporan}'`

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
    let kode_laporan = req.body.kode_laporan

    let qry = `DELETE FROM LaporanBulanan WHERE kode_laporan = '${kode_laporan}'`

connection.query(qry, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        response.ok('Data Berhasil Dihapus', res)
        console.log(`Data Laporan ${kode_laporan} Berhasil dihapus`);
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
     editOneData,
     deleteOneData,
     insertImage
 }