const http = require('http');
const express = require('express');
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express();
const cookieParser = require('cookie-parser')
const fetch = require('node-fetch')
const cors = require('cors')

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.use('/', require('./routes'))

app.listen(process.env.PORT, () => console.log('Rodando com sucesso na porta ' + process.env.PORT))
