const express = require('express');
const router = express.Router();
const user = require('../controller/user')
const kelas = require('../controller/kelas')
const lspp = require('../controller/LSPP')

// API USER
router.get('/getuser', user.getAllData);
router.post('/addOneUser', user.addOneData);
router.post('/editOneUser', user.editOneData);
router.post('/deleteOneUser', user.deleteOneData);

//API KELAS
router.get('/getkelas',kelas.getAllData );
router.post('/addOneKelas', kelas.addOneData);



//API Laporan SPP
router.get('/getLaporanSPP',lspp.getAllData);
router.post('/getSPPbyKode', lspp.getOneByKode);
router.post('/addOneLaporanSPP', lspp.addOneData);

module.exports = router;