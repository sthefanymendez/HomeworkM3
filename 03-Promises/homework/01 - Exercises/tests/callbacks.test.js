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
let dirpathOne = path.join(__dirname, "../poem-one");
let dirpathTwo = path.join(__dirname, "../poem-two");

let stanzasOne = fs
  .readdirSync(dirpathOne)
  .filter((filename) => {
    return filename[0] !== ".";
  })
  .map((filename) => {
    return fs.readFileSync(path.join(dirpathOne, filename)).toString();
  });

let stanzasTwo = fs
  .readdirSync(dirpathTwo)
  .filter((filename) => {
    return filename[0] !== ".";
  })
  .map((filename) => {
    return fs.readFileSync(path.join(dirpathTwo, filename)).toString();
  });

xdescribe("01 | Ejercicios - Callbacks (Poem-one)", () => {
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 250));
  });

  beforeEach(() => {
    jest.spyOn(utils, "readFile").mockImplementation((filename, callback) => {
      let stanza = stanzasOne.find((stanza) => stanza.includes(filename));
      callback(null, stanza);
    });
  });

  it("Problem A | Consologuea la primer stanza versión callback", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemA();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemA | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    readFileCallback(null, stanzasOne[0]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[0]);
    blue.mockRestore();
    readFileSpy.mockRestore();
    done();
  });

  it("Problem B | Consologuea la segunda y tercer stanza versión callback", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemB();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemB | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    const readFileCallbackTwo = readFileSpy.mock.calls[1][1];
    readFileCallback(null, stanzasOne[1]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[1]);
    readFileCallbackTwo(null, stanzasOne[2]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
    blue.mockRestore();
    readFileSpy.mockRestore();
    done();
  });

  it("Problem C | Consologuea la segunda y tercer stanza versión callback", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemC();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemC | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    const readFileCallbackTwo = readFileSpy.mock.calls[1][1];
    readFileCallback(null, stanzasOne[1]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[1]);
    readFileCallbackTwo(null, stanzasOne[2]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
    blue.mockRestore();
    readFileSpy.mockRestore();
    done();
  });

  it("Problem D | Consologuea la cuarta stanza versión callback o un error", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemD();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemD | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    readFileCallback(null, stanzasOne[3]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
    readFileCallback("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    blue.mockRestore();
    magenta.mockRestore();
    readFileSpy.mockRestore();
    done();
  });

  it("Problem E | Consologuea la tercera stanza y luego la cuarta stanza versión callback o un error", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemE();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemE | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    const readFileCallbackTwo = readFileSpy.mock.calls[1][1];
    readFileCallback(null, stanzasOne[2]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
    readFileCallback("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    readFileCallbackTwo(null, stanzasOne[3]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
    readFileCallbackTwo("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    blue.mockRestore();
    magenta.mockRestore();
    readFileSpy.mockRestore();
    done();
  });

  it("Problem F | Consologuea la tercera stanza y luego la cuarta stanza versión callback o un error. En ambos casos, al finalizar se debe consologuear 'done'", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemF();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemF | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    const readFileCallbackTwo = readFileSpy.mock.calls[1][1];
    readFileCallback(null, stanzasOne[2]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
    readFileCallback("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    readFileCallbackTwo(null, stanzasOne[3]);
    expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
    readFileCallbackTwo("Error", null);
    expect(magenta).toHaveBeenCalledWith(new Error("Error"));
    blue.mockRestore();
    magenta.mockRestore();
    readFileSpy.mockRestore();
    done();
  });
});

describe("01 | Ejercicios - Callbacks (Poem-two)", () => {
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 250));
  });

  beforeEach(() => {
    jest.spyOn(utils, "readFile").mockImplementation((filename, callback) => {
      let stanza = stanzasTwo.find((stanza) => stanza.includes(filename));
      callback(null, stanza);
    });
  });

  it("Problem A | Consologuea la primera stanza versión callback", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const readFileSpy = jest.spyOn(utils, "readFile");
    problemA();
    if (readFileSpy.mock.calls.length === 0)
      return done(new Error("problemA | No se llamo a readFile"));
    const readFileCallback = readFileSpy.mock.calls[0][1];
    readFileCallback(null, stanzasTwo[0]);
    expect(blue).toHaveBeenCalledWith(stanzasTwo[0]);
    blue.mockRestore();
    readFileSpy.mockRestore();
    done();
  });
  
});
