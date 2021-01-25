const router = require('express').Router()
const fs = require('fs')
const Discord = require('discord.js')
const btoa = require('btoa')
const fetchUserInfo = require("../util.js").fetchUserInfo
const querystring = require('querystring');
const fetch = require('node-fetch')

router.get('/', async (req, res) => {
  
  res.render('index')
  
})

module.exports = router;
