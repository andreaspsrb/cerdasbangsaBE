'use strict';
let response = require('../res/res');
let connection = require('../config/connect');

let getAllData = (req, res) => {
    
    let qry = 'SELECT * FROM siswa';
    connection.query(qry, (error, result) =>{
        if (error){
            console.log(error);
        }else{
            response.ok(result, res)
            console.log(result);
        }
    })
}

let getOneByKode = (req, res) => {

    let id_user = req.body.id_user    
 
     let qry = `SELECT * FROM siswa WHERE id_user = '${id_user}'`;
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
        nis,
        nisn,
        nama_siswa,
        jenis_kelamin,
        tgl_lahir,
        tempat_lahir,
        alamat,
        nama_ayah,
        nama_ibu,
        no_hp,
        agama,
    } = req.body

    let qry = `INSERT INTO siswa ( nis,
        nisn,
        nama_siswa,
        jenis_kelamin,
        tgl_lahir,
        tempat_lahir,
        alamat,
        nama_ayah,
        nama_ibu,
        no_hp,
        agama) 
    VALUES(
    '${nis}', 
    '${nisn}', 
    '${nama_siswa}', 
    '${jenis_kelamin}', 
    '${tgl_lahir}',
    '${tempat_lahir}', 
    '${alamat}', 
    '${nama_ayah}',
    '${nama_ibu}', 
    '${no_hp}', 
    '${agama}')`

connection.query(qry, (error, result) =>{
    if (error) {
        console.log(error);
    } else {
        response.ok(result, res)
        console.log(`Data Siswa ${nama_siswa} berhasil ditambahkan`);
    }
})
}

let editOneData = (req, res) => {
    let{
        id_regist,
        nis,
        nisn,
        nama_siswa,
        jenis_kelamin,
        tgl_lahir,
        tempat_lahir,
        alamat,
        nama_ayah,
        nama_ibu,
        no_hp,
        agama,
    } = req.body

    let qry = `UPDATE siswa
        Set nis = '${nis}',
            nisn = '${nisn}',
            nama_siswa = '${nama_siswa}',
            jenis_kelamin = '${jenis_kelamin}',
            tgl_lahir = '${tgl_lahir}',
            tempat_lahir = '${tempat_lahir}',
            alamat = '${alamat}',
            nama_ayah = '${nama_ayah}',
            nama_ibu = '${nama_ibu}',
            no_hp = '${no_hp}',
            agama = '${agama}'
        WHERE id_regist = '${id_regist}'`

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
    let id_regist = req.body.id_regist

    let qry = `DELETE FROM siswa WHERE id_regist = '${id_regist}'`

connection.query(qry, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        response.ok('Data Berhasil Dihapus', res)
        console.log(`Data Siswa ${id_regist} Berhasil dihapus`);
    }
})
}

module.exports = {
    getAllData,
    addOneData,
    editOneData,
    getOneByKode,
    deleteOneData

}