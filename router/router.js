const express = require("express");
const router = express.Router();
const user = require("../controller/user");
const kelas = require("../controller/kelas");
const lspp = require("../controller/LSPP");
const siswa = require("../controller/siswa");
const guru = require("../controller/guru");
const lcicilan = require("../controller/Lcicilan");
const inventaris = require("../controller/Linventaris");
const bulanan = require("../controller/Bulanan");
const RegistrasiProses = require("../controller/RegistrasiProses");
const buku = require("../controller/buku");
const seragam = require("../controller/seragam");


// API USER
router.get("/getuser", user.getAllData);
router.post("/getonedata", user.getOneData)
router.post("/addOneUser", user.addOneData);
router.post("/editOneUser", user.editOneData);
router.post("/deleteOneUser", user.deleteOneData);
router.post("/login", user.login);

//API KELAS
router.get("/getkelas", kelas.getAllData);
router.post("/addOneKelas", kelas.addOneData);
router.post("/editOnedata", kelas.editOneData);
router.post("/deleteOnekelas", kelas.deleteOneData);

//API SISWA
router.get('/getSiswa', siswa.getAllData );
router.post('/addOneSiswa', siswa.addOneData);
router.post('/editOneSiswa', siswa.editOneData);
router.post("/getSPPbyKode", lspp.getOneByKode);
router.post('/deleteOnesiswa', siswa.deleteOneData);

//API Guru
router.get("/getguru", guru.getAllData);
router.post("/addoneguru", guru.addOneData);
router.post("/editoneguru", guru.editOneData);
router.post("/deleteoneguru", guru.deleteOneData);

//API Laporan SPP
router.get("/getLaporanSPP", lspp.getAllData);
router.post("/getSPPbyKode", lspp.getOneByKode);
router.post("/addOneLaporanSPP", lspp.addOneData);
router.post("/editonespp", lspp.editOneData);
router.post("/deleteonespp", lspp.deleteOneData);
router.post("/uploadImgSPP", lspp.insertImage)

//API Laporan Cicilan
router.get("/getLaporanCicilan", lcicilan.getAllData);
router.post("/getCicilanbyKode", lcicilan.getOneByKode);
router.post("/addOneLaporanCicilan", lcicilan.addOneData);
router.post("/editonecicilan", lcicilan.editOneData);
router.post("/deleteonecicilan", lcicilan.deleteOneData);
router.post("/uploadImgCicilan", lcicilan.insertImage)

//API Laporan Inventaris
router.get("/getLaporanInventaris", inventaris.getAllData);
router.post("/getInventarisbyKode", inventaris.getOneByKode);
router.post("/addOneLaporanInventaris", inventaris.addOneData);
router.post("/editoneinventaris", inventaris.editOneData);
router.post("/deleteoneinventaris", inventaris.deleteOneData);
router.post("/uploadImgInventaris", inventaris.insertImage)

//API Laporan Bulanan
router.get("/getLaporanBulanan", bulanan.getAllData);
router.post("/getBulananbyKode", bulanan.getOneByKode);
router.post("/addOneLaporanBulanan", bulanan.addOneData);
router.post("/editonebulanan", bulanan.editOneData);
router.post("/deleteonebulanan", bulanan.deleteOneData);
router.post("/uploadImgBulanan", bulanan.insertImage)

//API Buku
router.get("/getbuku", buku.getAllData);
router.post("/getbukubyKode", buku.getOneByKode);
router.post("/addOnebuku", buku.addOneData);
router.post("/editonebuku", buku.editOneData);
router.post("/deleteonebuku", buku.deleteOneData);
router.post("/uploadImgbuku", buku.insertImage)

//API Seragam
router.get("/getseragam", seragam.getAllData);
router.post("/getbukubyKode", seragam.getOneByKode);
router.post("/addOneseragam", seragam.addOneData);
router.post("/editoneseragam", seragam.editOneData);
router.post("/deleteoneseragam", seragam.deleteOneData);
router.post("/uploadImgseragam", seragam.insertImage)
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

// router.post("/upload", uploadImage, upload);

module.exports = router;
