/**
 *   ^...^
 *  <_* *_>   
 *    \_/
 *        metamask
 *         "-"   
 * 
 * Copyright (c) 2019 FCEV,Aventador-lab
 * E-mail :dev@FCEV.com
 * git@work:Aventador-lab/JS-libci.git
 * 
 */
'use strict'
const Verion = "1.0.0"; 

const Basparser = require('./lib/utils/basparser.js')
const punycode = require('punycode')
const base64Url = require('base64url')
const dns = require('dns')
const httpDns = require('http-dns')
const Doh = require('dns-over-http')


global.CommonUtils = {
  "punycode":punycode,
  "base64":base64Url,
  "dns":httpDns,
  "Doh":Doh
}

global.Basparser = Basparser

