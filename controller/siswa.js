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

let addOneData = (req, res) => {

    let{
        nis,
        nisn,
        nama_siswa,
        jenis_kelamin,
        tgl_lahir,
        tempat_lahir,
        alamat,
        nama_orangtua,
        no_hp1,
        no_hp2,
        agama,
        id_user,
    } = req.body

    let qry = `INSERT INTO siswa VALUES('${nis}', '${nisn}', '${nama_siswa}', '${jenis_kelamin}', '${tgl_lahir}',
    '${tempat_lahir}', '${alamat}', '${nama_orangtua}', '${no_hp1}', '${no_hp2}',
    '${agama}', '${id_user}')`

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
        nis,
        nisn,
        nama_siswa,
        jenis_kelamin,
        tgl_lahir,
        tempat_lahir,
        alamat,
        nama_orangtua,
        no_hp1,
        no_hp2,
        agama,
        id_user,
    } = req.body

    let qry = `UPDATE siswa
        Set nis = '${nis}',
            nisn = '${nisn}',
            nama_siswa = '${nama_siswa}',
            jenis_kelamin = '${jenis_kelamin}',
            tanggal_lahir = '${tgl_lahir}',
            tempat_lahir = '${tempat_lahir}',
            alamat = '${alamat}',
            nama_orangtua = '${nama_orangtua}',
            no_hp1 = '${no_hp1}',
            no_hp2 = '${no_hp2}',
            agama = '${agama}',
            id_user = '${id_user}'`

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
    let nisn = req.Body.nisn

    let qry = `DELETE FROM siswa WHERE nisn = '${nisn}'`

connection.query(qry, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        response.ok('Data Berhasil Dihapus', res)
        console.log(`Data Siswa ${nama_kelas} Berhasil dihapus`);
    }
})
}

module.exports = {
    getAllData,
    addOneData,
    editOneData,
    deleteOneData

}