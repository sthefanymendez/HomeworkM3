"use strict";

const {
  problemA,
  problemB,
  problemC,
  problemD,
  problemE,
  problemF,
} = require("../exercise-one");

let fs = require("fs");
let path = require("path");
let utils = require("../utils");
let dirpath = path.join(__dirname, "../poem-one");

let stanzas = fs
  .readdirSync(dirpath)
  .filter((filename) => {
    return filename[0] !== ".";
  })
  .map((filename) => {
    return fs.readFileSync(path.join(dirpath, filename)).toString();
  });

describe("01 | Ejercicios (poem-one)", () => {
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 250));
  });

  it("Poem one | Consologuea la primer stanza versión callback", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemA();
    const readFileCallback = readFileSpy.mock.calls[0][1];
    readFileCallback(null, stanzas[0]);
    expect(blue).toHaveBeenCalledWith(stanzas[0]);
    blue.mockRestore();
    readFileSpy.mockRestore();
    done();
  });

  it("Poem one | Consologuea la primer stanza versión promisificada", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    problemA();
    const promisifiedReadfileAux = promisifiedReadFileSpy.mock.results[0].value;
    promisifiedReadfileAux.then((stanza) => {
      expect(blue).toHaveBeenCalledWith(stanza);
      blue.mockRestore();
      promisifiedReadFileSpy.mockRestore();
      done();
    });
  });
});
