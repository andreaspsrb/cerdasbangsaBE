const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const cors = require('cors');
const ejs = require('ejs');

// const http = require('http')
// const path = require('path')
// const busboy = require("then-busboy")
// const fileUpload = require('express-fileupload')



// // app.option('*', cors());

let dotenv = require('dotenv');
let env = dotenv.config();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set(ejs)
app.set('view_engine', 'ejs')

app.use(cors())
app.use(morgan('dev'));



app.use('/', require('./router/router'))


app.listen(process.env.PORT, () =>{
     console.log(`berjalan di port  ${process.env.PORT}`);
})