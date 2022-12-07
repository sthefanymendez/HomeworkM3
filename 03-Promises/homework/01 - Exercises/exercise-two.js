"use strict";

var exerciseUtils = require("./utils");

var args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB,
  problemCx: problemC,
  problemDx: problemD,
  problemEx: problemE,
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  var problem = module.exports["problem" + arg];
  if (problem) problem();
});

function problemA() {
  // callback version
  // exerciseUtils.readFile("poem-one/stanza-01.txt", function (err, stanza) {
  //   exerciseUtils.blue(stanza);
  // });
  // exerciseUtils.readFile("poem-one/stanza-02.txt", function (err, stanza) {
  //   exerciseUtils.blue(stanza);
  // });

  // promise version
  // Tu código acá:
  let p1 = exerciseUtils
    .promisifiedReadFile("poem-two/stanza-01.txt")
    .then((stanza) => exerciseUtils.blue(stanza));

  let p2 = exerciseUtils
    .promisifiedReadFile("poem-two/stanza-02.txt")
    .then((stanza) => exerciseUtils.blue(stanza));

  Promise.all([p1, p2]).then(() => console.log("done"));
}

function problemB() {
  var filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  // callback version logeamos todos los versos
  // filenames.forEach((filename) => {
  //   exerciseUtils.readFile(filename, function (err, stanza) {
  //     exerciseUtils.blue(stanza);
  //   });
  // });

  // promise version
  // Tu código acá:
  var promesas = filenames.map((file) =>
    exerciseUtils
      .promisifiedReadFile(file)
      .then((stanza) => exerciseUtils.blue(stanza))
  );

  Promise.all(promesas).then(() => console.log("done"));
}

function problemC() {
  var filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  // callback version
  // filenames.forEach((filename) => {
  //   exerciseUtils.readFile(filename, function (err, stanza) {
  //     exerciseUtils.blue(stanza);
  //   });
  // });

  // promise version
  // Tu código acá:
  // var promesas = filenames.map((n) => exerciseUtils.promisifiedReadFile(n));

  // Promise.all(promesas)
  //   .then((stanzas) => {
  //     stanzas.forEach((p) => exerciseUtils.blue(p));
  //     console.log("done");
  //   })
  //   .catch((err) => exerciseUtils.magenta(new Error(err)));


  for (let i = 1, p = exerciseUtils.promisifiedReadFile(filenames[0]); i <= filenames.length; i++) {
    p = p.then(stanza => {
      exerciseUtils.blue(stanza)
      if (i === filenames.length) {
        console.log('done');
      }else{
        return exerciseUtils.promisifiedReadFile(filenames[i])
      }
    })
  }
}

function problemD() {
  var filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });
  var randIdx = Math.floor(Math.random() * filenames.length);
  filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  // callback version
  // filenames.forEach((filename) => {
  //   exerciseUtils.readFile(filename, function (err, stanza) {
  //     exerciseUtils.blue(stanza);
  //     if (err) exerciseUtils.magenta(new Error(err));
  //   });
  // });

  // promise version
  // Tu código acá:
  for (let i = 1, p = exerciseUtils.promisifiedReadFile(filenames[0]); i <= filenames.length; i++) {
    p = p.then(stanza => {
      exerciseUtils.blue(stanza);
      if (i === filenames.length) console.log('done');
      else return exerciseUtils.promisifiedReadFile(filenames[i]);
    })
    if (i === filenames.length){
      p.catch(err => {
        exerciseUtils.magenta(new Error(err));
        console.log('done');
      })
    } 
  }
}

function problemE() {
  var fs = require("fs");
  function promisifiedWriteFile(filename, str) {
    // tu código acá:
    return new Promise(function (resolve, reject) {
      fs.writeFile(filename, str, function (err) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
}
