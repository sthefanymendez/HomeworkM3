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



describe("01 | Ejercicios - Callbacks (Poem-one)", () => {
    afterAll(async () => {
        await new Promise((resolve) => setTimeout(() => resolve(), 250));
    });

    it("Problem A | Consologuea la primer stanza versión callback", (done) => {
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

    it("Problem B | Consologuea la segunda y tercer stanza versión callback", (done) => {
        jest.setTimeout(500);
        const blue = jest.spyOn(utils, "blue");
        const readFileSpy = jest.spyOn(utils, "readFile");
        problemB();
        const readFileCallback = readFileSpy.mock.calls[0][1];
        readFileCallback(null, stanzas[1]);
        readFileCallback(null, stanzas[2]);
        expect(blue).toHaveBeenCalledWith(stanzas[1]);
        expect(blue).toHaveBeenCalledWith(stanzas[2]);
        blue.mockRestore();
        readFileSpy.mockRestore();
        done();
    });

    it("Problem C | Consologuea la segunda y tercer stanza versión callback", (done) => {
        jest.setTimeout(500);
        const blue = jest.spyOn(utils, "blue");
        const readFileSpy = jest.spyOn(utils, "readFile");
        problemC();
        const readFileCallback = readFileSpy.mock.calls[0][1];
        readFileCallback(null, stanzas[1]);
        readFileCallback(null, stanzas[2]);
        expect(blue).toHaveBeenCalledWith(stanzas[1]);
        expect(blue).toHaveBeenCalledWith(stanzas[2]);
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
        
        expect(exactlyOneOccurred).toEqual(true);
        blue.mockRestore();
        magenta.mockRestore();
        readFileSpy.mockRestore();
        done();
    });
})