'use strict';
let response = require('../res/res');
let connection = require('../config/connect');

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
      
    
        } = req.body
        let image = req.protocol + "://" + req.get("host") +"/upload/" + req.file.filename
       console.log(image);
        let qry = `INSERT INTO LaporanInventaris
        ( kode_inventaris,tgl_pembelian,
            keterangan,	jumlah,
            catatan,tahun_ajaran,
            wali_kelas,image)
        VALUES('${kode_inventaris}',
            '${tgl_pembelian}',
            '${keterangan}',	
            '${jumlah}',
            '${catatan}',
            '${tahun_ajaran}',
            '${wali_kelas}',
            '${image}')`
    
    connection.query(qry, (error, result) => {
     if (error) {
         console.log(error);
     } else {
         response.ok(result, res)
         console.log(`Data ${kode_inventaris} berhasil ditambahkan`);

     }
 })
 }

 let editOneData = (req, res) => {
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

    let qry = `UPDATE LaporanInventaris
        Set tgl_pembelian = '${tgl_pembelian}',
            keterangan = '${keterangan}',	
            jumlah = '${jumlah}',
            catatan = '${catatan}',
            tahun_ajaran = '${tahun_ajaran}',
            wali_kelas = '${wali_kelas}',
            image = '${image}'
            WHERE kode_inventaris ='${kode_inventaris}'`

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
    let kode_inventaris = req.body.kode_inventaris

    let qry = `DELETE FROM LaporanInventaris WHERE kode_inventaris = '${kode_inventaris}'`

connection.query(qry, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        response.ok('Data Berhasil Dihapus', res)
        console.log(`Data Inventaris ${kode_inventaris} Berhasil dihapus`);
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
         console.log(`Data ${kode_inventaris} berhasil ditambahkan`);

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