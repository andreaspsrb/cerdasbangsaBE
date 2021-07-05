'use strict';
let response = require('../res/res');
let connection = require('../config/connect');

let getAllData = (req, res) => {
    
    let qry = 'SELECT * FROM Guru';
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

   let query = `INSERT INTO Guru
  (nama_guru, jenis_kelamin, no_nuptk,
   tempat_lahir, tgl_lahir, pendidikan,
    lulusan, jabatan, status_karyawan, agama,
     id_user) 
     VALUES 
     ('${nama_guru}', '${jenis_kelamin}', '${no_nuptk}', 
     '${tempat_lahir}', '${tgl_lahir}', '${pendidikan}', '${lulusan}',
      '${jabatan}', '${status_karyawan}', '${agama}', '${id_user}')`

connection.query(query, (error, result) =>{
    if (error) {
        console.log(error);
    } else {
        response.ok(result, res)
        console.log(`Data guru ${nama_guru} berhasil ditambahkan`);
    }
})
}

let editOneData = (req, res) => {
    let{
        id_guru,
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

    let qry = `UPDATE Guru
        Set nama_guru = '${nama_guru}',
            jenis_kelamin = '${jenis_kelamin}',
            no_nuptk = '${no_nuptk}',
            tempat_lahir= '${tempat_lahir}',
            tgl_lahir = '${tgl_lahir}',
            pendidikan = '${pendidikan}',
            lulusan = '${lulusan}',
            jabatan = '${jabatan}',
            status_karyawan = '${status_karyawan}',
            agama = '${agama}',
            id_user = '${id_user}'
            WHERE id_guru ='${id_guru}'`

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
    let id_guru = req.body.id_guru

    let qry = `DELETE FROM Guru WHERE id_guru = '${id_guru}'`

connection.query(qry, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        response.ok('Data Berhasil Dihapus', res)
        console.log(`Data guru ${id_guru} Berhasil dihapus`);
    }
})
}

module.exports = {
    getAllData,
    addOneData,
    editOneData,
    deleteOneData
}