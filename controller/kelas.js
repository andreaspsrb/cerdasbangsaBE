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
module.exports = {
    getAllData,
    addOneData
}