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
const Verion = require('../package.json').version 

const Basparser = require('./lib/utils/basparser.js')
const punycode = require('punycode')

global.CommonUtils = {
  "punycode":punycode
}

global.Basparser = Basparser
