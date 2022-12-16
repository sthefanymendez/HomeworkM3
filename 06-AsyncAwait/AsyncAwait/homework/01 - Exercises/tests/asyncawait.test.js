"use strict";

const {
  problemA,
  problemB,
  problemC,
  problemD,
  problemE,
  problemF,
} = require("../exercise-one");

const {
  problemAx,
  problemBx,
  problemCx,
  problemDx,
} = require("../exercise-two");

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

describe("01 | Ejercicios - Async Await (poem-one)", () => {
    afterAll(async () => {
        await new Promise((resolve, reject) => setTimeout(() => resolve(), 250));
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Problem A | Consologuea la primer stanza versión Async Await", async () => {
        const blue = jest.spyOn(utils, "blue");
        const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
        await problemA();
        if (promisifiedReadFileSpy.mock.calls.length === 0)
            throw new Error("problemA | No se llamo a promisifiedReadFile");
        try{
            expect(blue).toHaveBeenCalledWith(stanzasOne[0]);
            blue.mockRestore();
            promisifiedReadFileSpy.mockRestore();
        } catch(error) {
            blue.mockRestore();
            promisifiedReadFileSpy.mockRestore();
            throw new Error("problemA | No se llamó a la stanza correcta")
        }
    })

    it("Problem B | Consologuea la segunda y tercer stanza versión Async Await", async () => {
        const blue = jest.spyOn(utils, "blue");
        const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
        await problemB();
        if (promisifiedReadFileSpy.mock.calls.length === 0)
            throw new Error("problemB | No se llamo a promisifiedReadFile");
        try {
            expect(blue).toHaveBeenCalledWith(stanzasOne[1]);
            expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
            blue.mockRestore();
            promisifiedReadFileSpy.mockRestore();
        } catch (error) {
            blue.mockRestore();
            promisifiedReadFileSpy.mockRestore();
            throw new Error("problemB | No se llamó a la stanza correcta")
        }
    })

    it("Problem C | Consologuea la segunda y tercer stanza versión Async Await", async () => {
        const blue = jest.spyOn(utils, "blue");
        const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
        await problemC();
        if (promisifiedReadFileSpy.mock.calls.length === 0)
          throw new Error("problemC | No se llamo a promisifiedReadFile");
        try {
            expect(blue).toHaveBeenCalledWith(stanzasOne[1]);
            expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
            blue.mockRestore();
            promisifiedReadFileSpy.mockRestore();
        } catch (error) {
            blue.mockRestore();
            promisifiedReadFileSpy.mockRestore();
            throw new Error("problemC | No se llamó a la stanza correcta")
        }
    })

    it("Problem D | Consologuea la cuarta stanza versión Async Await o un error", async () => {
        const blue = jest.spyOn(utils, "blue");
        const magenta = jest.spyOn(utils, "magenta");
        const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
        await problemD();
        if (promisifiedReadFileSpy.mock.calls.length === 0)
          throw new Error("problemD | No se llamo a promisifiedReadFile");
        try {
            expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
            promisifiedReadFileSpy.mockRestore();
            magenta.mockRestore();
            blue.mockRestore();
        } catch (error) {
            console.log('test: ', error);
            expect(magenta).toHaveBeenCalledWith(error);
            promisifiedReadFileSpy.mockRestore();
            magenta.mockRestore();
            blue.mockRestore();
        }
    })
})