"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
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
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

function problemA() {
  // callback version
  // exerciseUtils.readFile("poem-one/stanza-01.txt", function (err, stanza) {
  //   exerciseUtils.blue(stanza);
  // });

  // promise version
  // Tu código acá:
  exerciseUtils.promisifiedReadFile('poem-one/stanza-01.txt')
  .then(stanza => exerciseUtils.blue(stanza))
}

function problemB() {
  // callback version
  // exerciseUtils.readFile("poem-one/stanza-02.txt", function (err, stanza2) {
  //   exerciseUtils.blue(stanza2);
  // });
  // exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
  //   exerciseUtils.blue(stanza3);
  // });

  // promise version
  // Tu código acá:
  exerciseUtils.promisifiedReadFile('poem-one/stanza-02.txt').then(stanza => exerciseUtils.blue(stanza))
  exerciseUtils.promisifiedReadFile('poem-one/stanza-03.txt').then(stanza => exerciseUtils.blue(stanza))
}

function problemC() {
  // callback version
  // exerciseUtils.readFile("poem-one/stanza-02.txt", function (err, stanza2) {
  //   exerciseUtils.blue(stanza2);
  //   exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
  //     exerciseUtils.blue(stanza3);
  //   });
  // });

  // promise version (hint: don't need to nest `then` calls)
  // Tu código acá:
  exerciseUtils.promisifiedReadFile('poem-one/stanza-02.txt')
  .then(stanza2 => {
    exerciseUtils.blue(stanza2)
    return exerciseUtils.promisifiedReadFile('poem-one/stanza-03.txt')
  })
  .then(stanza3 => {
    exerciseUtils.blue(stanza3)
    console.log('done')
  })
}

function problemD() {
  // callback version
  // exerciseUtils.readFile(
  //   "poem-one/wrong-file-name.txt",
  //   function (err, stanza4) {
  //     if (err) exerciseUtils.magenta(new Error(err));
  //     else exerciseUtils.blue(stanza4);
  //   }
  // );

  // promise version
  // Tu código acá:
  exerciseUtils.promisifiedReadFile('poem-one/wrong-file-name.txt')
  .then(stanza => exerciseUtils.blue(stanza))
  .catch(err => exerciseUtils.magenta(new Error(err)))

}

function problemE() {
  // callback version
  // exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
  //   if (err) return exerciseUtils.magenta(new Error(err));
  //   exerciseUtils.blue(stanza3);
  //   exerciseUtils.readFile(
  //     "poem-one/wrong-file-name.txt",
  //     function (err2, stanza4) {
  //       if (err2) return exerciseUtils.magenta(new Error(err2));
  //       exerciseUtils.blue(stanza4);
  //     }
  //   );
  // });

  // promise version
  // Tu código acá:
  exerciseUtils.promisifiedReadFile('poem-one/stanza-03.txt')
    .then(stanza3 => {
      exerciseUtils.blue(stanza3)
      return exerciseUtils.promisifiedReadFile('poem-one/wrong-file-name.txt')
    })
    .then(stanza4 => exerciseUtils.blue(stanza4))
    .catch(err =>exerciseUtils.magenta(new Error(err)))
}

function problemF() {
  // callback version
  // exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
  //   if (err) exerciseUtils.magenta(new Error(err));
  //   exerciseUtils.blue(stanza3);
  //   exerciseUtils.readFile(
  //     "poem-one/wrong-file-name.txt",
  //     function (err2, stanza4) {
  //       if (err2) exerciseUtils.magenta(new Error(err2));
  //       else exerciseUtils.blue(stanza4);
  //     }
  //   );
  // });

  // promise version
  // Tu código acá:
  exerciseUtils.promisifiedReadFile('poem-one/stanza-03.txt')
  .then(stanza3 => {
    exerciseUtils.blue(stanza3)
    return exerciseUtils.promisifiedReadFile('poem-one/wrong-file-name.txt')
  })
  .then(stanza4 => {
    exerciseUtils.blue(stanza4)
    console.log('done')
  })
  .catch(err => {
    exerciseUtils.magenta(new Error(err))
    console.log('done')
  })
}
