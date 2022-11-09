const fs = require('fs');
const request = require('request');
const process = require('process');

function pwd(print) {
   print(process.cwd());
}

function date(print) {
   print(Date());
}

function echo(print, args) {
   print(args.join(' '));
}

function ls(print) {
   fs.readdir('.', function (err, files) {
      if (err) throw err;
      print(files.join('\n'));
   });
}

function cat(print, args) {
   fs.readFile(args[0], 'utf-8', (err, data) => {
      if (err) throw err;
      print(data);
   });
}

function head(print, args) {
   fs.readFile(args[0], 'utf-8', (err, data) => {
      if (err) throw err;
      print(data.split('\n').slice(0, 6).join('\n'));
   });
}

function tail(print, args) {
   fs.readFile(args[0], 'utf-8', (err, data) => {
      if (err) {
         throw err;
      }
      print(data.split('\n').slice(-5).join('\n'));
   });
}

function curl(print, args) {
   request(args[0], function (err, response, body) {
      if (err) {
         throw err;
      }
      print(body);
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
