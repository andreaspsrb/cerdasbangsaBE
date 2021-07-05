const express = require("express");
const router = express.Router();
const user = require("../controller/user");
const kelas = require("../controller/kelas");
const lspp = require("../controller/LSPP");
const siswa = require("../controller/siswa");
const guru = require("../controller/guru");
const RegistrasiProses = require("../controller/RegistrasiProses");
// API USER
router.get("/getuser", user.getAllData);
router.post("/addOneUser", user.addOneData);
router.post("/editOneUser", user.editOneData);
router.post("/deleteOneUser", user.deleteOneData);

//API KELAS
router.get("/getkelas", kelas.getAllData);
router.post("/addOneKelas", kelas.addOneData);
router.post("/editOnedata", kelas.editOneData);
router.post("/deleteOnekelas", kelas.deleteOneData);

// //API SISWA
// router.get('/getSiswa', siswa.getAllData );
// router.post('/addOneSiswa', siswa.addOneData);
// router.post('/editOnedata', siswa.editOneData);
// router.post('/deleteOnesiswa', siswa.deleteOneData);

//API Guru
router.get("/getguru", guru.getAllData);
router.post("/addoneguru", guru.addOneData);
router.post("/editoneguru", guru.editOneData);
router.post("/deleteoneguru", guru.deleteOneData);

//API Laporan SPP
router.get("/getLaporanSPP", lspp.getAllData);
router.post("/getSPPbyKode", lspp.getOneByKode);
router.post("/addOneLaporanSPP", lspp.addOneData);

// LOGIN
// REGISTRASI AKUN
// REGISTRASI SISWA BARU
// MONITORING PENDAFTARAN SISWA BARU
//first regist

router.post("/firstRegist", RegistrasiProses.addFirstRegist);
//upload pembayaran pendaftaran formulir
//download form
//upload form
//monitoring wawancara
//payment cicilan daftar ulang

router.get("/getDataRegist", RegistrasiProses.getDataRegist);
router.post("/editStatusRegist", RegistrasiProses.editStatusRegist);
router.post("/deleteRegist", RegistrasiProses.deleteRegist);
// LAPORAN SPP
// LAPORAN CICILAN
// LAPORAN INVENTARIS
// MONITORING LAPORAN BULANAN

//NOTIF CONFIRMATION

module.exports = router;
