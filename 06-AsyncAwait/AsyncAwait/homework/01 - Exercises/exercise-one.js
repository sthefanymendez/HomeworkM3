/*********** Yo explico `exerciseUtils` ********
 *
 * excersiceUtils es una variable que viene de un archivo en este repo
 * El archivo `./utils` esta en este nivel y se llama `utils.js`
 *
 * Este archivo crea un `promisifiedReadFile` - FIJATE EN ÉL!!!
 *
 * Las funciones `blue` y `magenta` para mantener tu código DRY
 *
 ***********************************************/

"use strict";

var Promise = require("bluebird"),
  exerciseUtils = require("./utils");

var readFile = exerciseUtils.readFile,
  promisifiedReadFile = exerciseUtils.promisifiedReadFile,
  blue = exerciseUtils.blue,
  magenta = exerciseUtils.magenta;

var args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemA: problemA,
  problemB: problemB,
  problemC: problemC,
  problemD: problemD,
  problemE: problemE,
  problemF: problemF,
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  var problem = module.exports["problem" + arg];
  if (problem) problem();
});

function problemA() {
  // callback version
  readFile("poem-one/stanza-01.txt", function (err, stanza) {
    console.log("-- A. callback version --");
    blue(stanza);
  });

  // AsyncAwait version
}

function problemB() {
  // callback version
  readFile("poem-one/stanza-02.txt", function (err, stanza2) {
    console.log("-- B. callback version (stanza two) --");
    blue(stanza2);
  });
  readFile("poem-one/stanza-03.txt", function (err, stanza3) {
    console.log("-- B. callback version (stanza three) --");
    blue(stanza3);
  });

  // AsyncAwait version
}

function problemC() {
  // callback version
  readFile("poem-one/stanza-02.txt", function (err, stanza2) {
    console.log("-- C. callback version (stanza two) --");
    blue(stanza2);
    readFile("poem-one/stanza-03.txt", function (err, stanza3) {
      console.log("-- C. callback version (stanza three) --");
      blue(stanza3);
      console.log("-- C. callback version done --");
    });
  });

  // AsyncAwait version
}

function problemD() {
  // callback version
  readFile("poem-one/wrong-file-name.txt", function (err, stanza4) {
    console.log("-- D. callback version (stanza four) --");
    if (err) magenta(err);
    else blue(stanza4);
  });

  // AsyncAwait version
}

function problemE() {
  // callback version
  readFile("poem-one/stanza-03.txt", function (err, stanza3) {
    console.log("-- E. callback version (stanza three) --");
    if (err) return magenta(err);
    blue(stanza3);
    readFile("poem-one/wrong-file-name.txt", function (err2, stanza4) {
      console.log("-- E. callback version (stanza four) --");
      if (err2) return magenta(err2);
      blue(stanza4);
    });
  });

  // AsyncAwait version
}

function problemF() {
  // callback version
  readFile("poem-one/stanza-03.txt", function (err, stanza3) {
    console.log("-- F. callback version (stanza three) --");
    if (err) {
      magenta(err);
      console.log("-- F. callback version done --");
      return;
    }
    blue(stanza3);
    readFile("poem-one/wrong-file-name.txt", function (err2, stanza4) {
      console.log("-- F. callback version (stanza four) --");
      if (err2) magenta(err2);
      else blue(stanza4);
      console.log("-- F. callback version done --");
    });
  });

  // AsyncAwait version
}
