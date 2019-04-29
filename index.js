#!/usr/bin/env node

var program = require('commander');
//var QRCode = require('qrcode');
var qrcode = require('qrcode-terminal');
 
program
  .version('0.0.1')
  .arguments('<cmd>')
  .action(function (cmd, env) {
    // QRCode.toDataURL(cmd, { errorCorrectionLevel: 'H' }, function (err, url) {
    //     console.log(url)
    // })  
    qrcode.generate(cmd, function (qrcode) {
        console.log(qrcode);
    });
  });
program.parse(process.argv);




