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
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 250));
    // .catch(reason => console.log(reason.message))
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Problem A | Consologuea la primer stanza versión promisificada", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    problemA();
    const promisifiedReadfileAux = promisifiedReadFileSpy.mock.results[0].value;
    promisifiedReadfileAux.then(() => {
      expect(blue).toHaveBeenCalledWith(stanzas[0]);
      blue.mockRestore();
      promisifiedReadFileSpy.mockRestore();
      done();
    });
  });

  it("Problem B | Consologuea la segunda y tercer stanza versión promisificada", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    problemB();
    const promisifiedReadfileAux = promisifiedReadFileSpy.mock.results[0].value;
    promisifiedReadfileAux.then(() => {
      expect(blue).toHaveBeenCalledWith(stanzas[1]);
      expect(blue).toHaveBeenCalledWith(stanzas[2]);
      blue.mockRestore();
      promisifiedReadFileSpy.mockRestore();
      done()
    })
  });

  it("Problem C | Consologuea la segunda y tercer stanza versión promisificada", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    problemC();
    const promisifiedReadfileAux = promisifiedReadFileSpy.mock.results[0].value;
    promisifiedReadfileAux
      .then(() => {
        expect(blue).toHaveBeenCalledWith(stanzas[1]);
        return promisifiedReadFileSpy.mock.results[1].value;
      })
      .then(() => {
        expect(blue).toHaveBeenCalledWith(stanzas[2]);
        blue.mockRestore();
        promisifiedReadFileSpy.mockRestore();
        done();
      })
  });

  it("Problem D | Consologuea la cuarta stanza versión promisificada o un error", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    problemD();
    const promisifiedReadfileAux = promisifiedReadFileSpy.mock.results[0].value;
    promisifiedReadfileAux
      .then((stanza) => {
        expect(stanza === stanzas[3]).toBe(true)
        promisifiedReadFileSpy.mockRestore();
        magenta.mockRestore();
        blue.mockRestore();
        done();
      })
      .catch((error) => {
        expect(magenta).toHaveBeenCalledWith(new Error(error));
        promisifiedReadFileSpy.mockRestore();
        magenta.mockRestore();
        blue.mockRestore();
        done();
      })
  })

  it("Problem E | Consologuea la tercer stanza y luego la cuarta stanza o su respectivo error, versión promisificada", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    problemE();
    const promisifiedReadfileAux = promisifiedReadFileSpy.mock.results[0].value;
    promisifiedReadfileAux
      .then((stanza) => {
        expect(stanza === stanzas[2]).toBe(true);
        return promisifiedReadFileSpy.mock.results[1].value;
      })
      .then((stanza) => {
        expect(stanza === stanzas[3]).toBe(true);
        promisifiedReadFileSpy.mockRestore();
        magenta.mockRestore();
        blue.mockRestore();
        done();
      })
      .catch((error) => {
        expect(magenta).toHaveBeenCalledWith(new Error(error));
        promisifiedReadFileSpy.mockRestore();
        magenta.mockRestore();
        blue.mockRestore();
        done();
      });
  });

  it("Problem F | Consologuea la tercer stanza y luego la cuarta stanza o un error para cualquiera de los casos, versión promisificada", (done) => {
    jest.setTimeout(500);
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    problemE();
    const promisifiedReadfileAux = promisifiedReadFileSpy.mock.results[0].value;
    promisifiedReadfileAux
      .then((stanza) => {
        expect(stanza === stanzas[2]).toBe(true);
        return promisifiedReadFileSpy.mock.results[1].value;
      })
      .then((stanza) => {
        expect(stanza === stanzas[3]).toBe(true);
        promisifiedReadFileSpy.mockRestore();
        magenta.mockRestore();
        blue.mockRestore();
        done();
      })
      .catch((error) => {
        expect(magenta).toHaveBeenCalledWith(new Error(error));
        promisifiedReadFileSpy.mockRestore();
        magenta.mockRestore();
        blue.mockRestore();
        done();
      });
  })
  
});
