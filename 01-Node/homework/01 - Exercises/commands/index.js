const fs = require('fs');
const utils = require('../utils/request');
const process = require('process');

function pwd(print) {
   print(process.cwd());
}

function date(print) {
   print(Date());
}

function echo(print, args) {
   print(args);
}

function ls(print) {
   fs.readdir('.', function (err, files) {
      if (err) throw err;
      print(files.join(' '));
   });
}

function cat(print, args) {
   fs.readFile(args, 'utf-8', (err, data) => {
      if (err) throw err;
      print(data);
   });
}

function head(print, args) {
   fs.readFile(args, 'utf-8', (err, data) => {
      if (err) throw err;
      print(data.split('\n').slice(0, 8).join('\n'));
   });
}

function tail(print, args) {
   fs.readFile(args, 'utf-8', (err, data) => {
      if (err) {
         throw err;
      }
      print(data.split('\n').slice(-7).join('\n'));
   });
}

function curl(print, args) {
   utils.request(args, function (err, response) {
      if (err) {
         throw err;
      }
      print(response);
   });
}

module.exports = {
   pwd,
   date,
   echo,
   ls,
   cat,
   head,
   tail,
   curl,
};
