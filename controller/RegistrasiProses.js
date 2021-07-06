"use strict";
let response = require("../res/res");
let connection = require("../config/connect");

let getDataRegist = (req, res) => {
  let qry = `SELECT a.id_regist, a.nis, a.nama_siswa, b.respon as status_pendaftaran, b.value as hasil
    FROM siswa a 
    INNER JOIN kode_master b ON  a.ms_registrasi= b.idkode
    WHERE b.nama_kode = 'status_proses_regist'
`;

  connection.query(qry, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      response.ok(result, res);
      console.log(result);
    }
  });
};


let addFirstRegist = (req, res) => {

  let{
    nama_siswa,
    jenis_kelamin,
    agama,
    tgl_lahir, 
    tempat_lahir, 
    alamat, 
    no_hp,
  } = req.body

      if (nama_siswa.length == 0) {
        let ress = {
            status: 'error',
            error: 'kolom nama kosong',
        }

        res.send(ress);
        return;
    }
  
    if (agama.length == 0) {
      let ress = {
          status: 'error',
          error: 'kolom agama kosong',
      }

      res.send(ress);
      return;
    }

    if (tgl_lahir.length == 0) {
      let ress = {
          status: 'error',
          error: 'kolom tanggal lahir kosong',
      }

      res.send(ress);
      return;
    }


    if (tempat_lahir.length == 0) {
      let ress = {
          status: 'error',
          error: 'kolom tempat lahir kosong',
      }

      res.send(ress);
      return;
    }


    if (alamat.length == 0) {
      let ress = {
          status: 'error',
          error: 'kolom alamat kosong',
      }

      res.send(ress);
      return;
    }


      if (no_hp == 0) {
        let ress = {
            status: 'error',
            error: 'kolom no hp kosong',
        }
        res.send(ress);
        return;
      } else if (response.checknumber(no_hp) = false) {

        let ress = {
          status: 'error',
          error: 'kolom no hp bukan angka',
        }
          res.send(ress);
          return;
      }
  
      



let qry = `INSERT INTO siswa (nama_siswa, jenis_kelamin, agama, tgl_lahir, tempat_lahir, alamat, no_hp, ms_status, ms_registrasi) 
VALUES ('${nama_siswa}', '${jenis_kelamin}', '${agama}', '${tgl_lahir}', '${tempat_lahir}', '${alamat}', '${no_hp}', '10', '10')`


connection.query(qry, (error, result) =>{
  if (error) {
      console.log(error);
  } else {
      response.ok(result, res)
      console.log(`Data guru ${nama_siswa} berhasil ditambahkan`);
  }
})
}




let editStatusRegist = (req, res) => {
  let { id_regist, ms_status, ms_registrasi } = req.body;
  let qry = `UPDATE siswa
    SET ms_status = ${ms_status}, ms_registrasi = ${ms_registrasi}
    WHERE id_regist = ${id_regist};`;

  connection.query(qry, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      response.ok("Data berhasil diubah", res);
      console.log(result.affectedRows, "Data Berhasil diubah");
    }
  });
};

let deleteRegist = (req, res) => {
  let nama_siswa = req.body.nama_siswa;
  let qry = `DELETE FROM siswa WHERE nama_siswa = '${nama_siswa}'`;

  connection.query(qry, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      response.ok("Data Berhasil Dihapus", res);
      console.log(result.affectedRows, "Berhasil dihapus");
    }
  });
};

module.exports = {
  getDataRegist,
  addFirstRegist,
  editStatusRegist,
  deleteRegist,
};
