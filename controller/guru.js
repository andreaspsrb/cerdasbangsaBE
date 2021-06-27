'use strict';
let response = require('../res/res');
let connection = require('../config/connect');

let getAllData = (req, res) => {
    
    let qry = 'SELECT * FROM guru';
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
        nama_guru,
        jenis_kelamin,
        no_nuptk,
        tempat_lahir,
        tgl_lahir,
        pendidikan,
        lulusan,
        jabatan,
        status_karyawan,
        agama,
        id_user,
    } = req.body

    let qry = `INSERT INTO guru VALUES('${nama_guru}', '${jenis_kelamin}', '${no_nuptk}', '${tempat_lahir}', '${tgl_lahir}',
    '${pendidikan}', '${lulusan}', '${jabatan}', '${status_karyawan}', '${agama}','${id_user}')`


connection.query(qry, (error, result) =>{
    if (error) {
        console.log(error);
    } else {
        response.ok(result, res)
        console.log(`Data Kelas ${nama_kelas} berhasil ditambahkan`);
    }
})
}

let editOneData = (req, res) => {
    let{
        nama_guru,
        jenis_kelamin,
        no_nuptk,
        tempat_lahir,
        tgl_lahir,
        pendidikan,
        lulusan,
        jabatan,
        status_karyawan,
        agama,
        id_user,
    } = req.body

    let qry = `UPDATE Kelas
        Set nama_guru = '${nama_guru}',
            jenis_kelamin = '${jenis_kelamin}',
            no_unptk = '${no_nuptk}',
            tempat_lahir= '${tempat_lahir}',
            tgl_lahir = '${tgl_lahir}',
            pendidikan = '${pendidikan}',
            lulusan = '${lulusan}',
            jabatan = '${jabatan}',
            status_karyawan = '${status_karyawan}',
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
    let nama_kelas = req.Body.nama_kelas

    let qry = `DELETE FROM Guru WHERE id_user = '${id_user}'`

connection.query(qry, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        response.ok('Data Berhasil Dihapus', res)
        console.log(`Data guru ${id_user} Berhasil dihapus`);
    }
})
}

module.exports = {
    getAllData,
    addOneData,
    editOneData,
    deleteOneData
}