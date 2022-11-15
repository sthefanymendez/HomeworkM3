"use strict";

var Promise = require("bluebird"),
  async = require("async"),
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
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  var problem = module.exports["problem" + arg];
  if (problem) problem();
});

function problemA() {
  // callback version
  async.each(
    ["poem-two/stanza-01.txt", "poem-two/stanza-02.txt"],
    function (filename, eachDone) {
      readFile(filename, function (err, stanza) {
        console.log("-- A. callback version --");
        blue(stanza);
        eachDone();
      });
    },
    function (err) {
      console.log("-- A. callback version done --");
    }
  );

  // promise version
  // Tu código acá:
}

function problemB() {
  var filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  // callback version
  async.each(
    filenames,
    function (filename, eachDone) {
      readFile(filename, function (err, stanza) {
        console.log("-- B. callback version --");
        blue(stanza);
        eachDone();
      });
    },
    function (err) {
      console.log("-- B. callback version done --");
    }
  );

  // promise version
  // Tu código acá:
}

function problemC() {
  var filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  // callback version
  async.eachSeries(
    filenames,
    function (filename, eachDone) {
      readFile(filename, function (err, stanza) {
        console.log("-- C. callback version --");
        blue(stanza);
        eachDone();
      });
    },
    function (err) {
      console.log("-- C. callback version done --");
    }
  );

  // promise version
  // Tu código acá:
}

function problemD() {
  var filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });
  var randIdx = Math.floor(Math.random() * filenames.length);
  filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  // callback version
  async.eachSeries(
    filenames,
    function (filename, eachDone) {
      readFile(filename, function (err, stanza) {
        console.log("-- D. callback version --");
        if (err) return eachDone(err);
        blue(stanza);
        eachDone();
      });
    },
    function (err) {
      if (err) magenta(new Error(err));
      console.log("-- D. callback version done --");
    }
  );

  // promise version
  // Tu código acá:
}

function problemE() {
  var fs = require("fs");
  function promisifiedWriteFile(filename, str) {
    // tu código acá:
  }
}
