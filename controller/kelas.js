'use strict';
let response = require('../res/res');
let connection = require('../config/connect');

let getAllData = (req, res) => {
    
    let qry = 'SELECT * FROM Kelas';
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
    nama_kelas,
    kode_kelas,
    nama_guru,
    } = req.body

    let qry = `INSERT INTO Kelas VALUES('${nama_kelas}', '${kode_kelas}', '${nama_guru}')`

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
        nama_kelas,
        kode_kelas,
        nama_guru,
    } = req.body

    let qry = `UPDATE Kelas
        Set nama_kelas = '${nama_kelas}',
            kode_kelas = '${kode_kelas}',
            nama_guru = '${nama_guru}'`

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

    let qry = `DELETE FROM Kelas WHERE nama_kelas = '${nama_kelas}'`

connection.query(qry, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        response.ok('Data Berhasil Dihapus', res)
        console.log(`Data Kelas ${nama_kelas} Berhasil dihapus`);
    }
})
}

mo =dule.exports = {
    getAllData,
    addOneData,
    editOneData,
    deleteOneData
}