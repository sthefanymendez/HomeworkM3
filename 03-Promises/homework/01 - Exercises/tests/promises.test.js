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
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 250))
      // .catch(reason => console.log(reason.message))
  });

  afterEach(() => {
    jest.restoreAllMocks()
  })

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
    promisifiedReadfileAux.then(() => {
      expect(blue).toHaveBeenCalledWith(stanzas[1])
      expect(blue).toHaveBeenCalledWith(stanzas[2]);
      promisifiedReadFileSpy.mockRestore();
      blue.mockRestore();
      done()
      // expect(blue.mock.calls[0][0]).toEqual(stanzas[1])
    })
      // .then(() => {
      //     // expect(blue.mock.calls[0][1]).toEqual(stanzas[2])
      //   })
  });

  // it("Problem D | Consologuea la cuarta stanza versión promisificada o un error", (done) => {
  //   jest.setTimeout(500);
  //   const blue = jest.spyOn(utils, "blue");
  //   const magenta = jest.spyOn(utils, "magenta");
  //   const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
  //   problemD();
  //   console.log(blue.mock);
  //   console.log(magenta.mock);
  //   console.log(promisifiedReadFileSpy.mock);
  //   // const promisifiedReadfileAux = promisifiedReadFileSpy.mock.results[0].value;
  //   // promisifiedReadfileAux
  //   //   .then((stanza) => {
  //   //     console.log(stanza === stanzas[3])
  //   //     expect(stanza === stanzas[3]).toBe(true)
  //   //   })
  //     // .catch((error) => {
  //     //   expect(magenta).toHaveBeenCalledWith(new Error(error));
  //     // })
  //     promisifiedReadFileSpy.mockRestore();
  //     magenta.mockRestore();
  //     blue.mockRestore();
  //     done();
  //   })
  
});
