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
    try {
      expect(blue).toHaveBeenCalledWith(stanzasOne[0]);
      blue.mockRestore();
      promisifiedReadFileSpy.mockRestore();
    } catch (error) {
      blue.mockRestore();
      promisifiedReadFileSpy.mockRestore();
      throw new Error("problemA | No se llamó a la stanza correcta");
    }
  });

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
      throw new Error("problemB | No se llamó a la stanza correcta");
    }
  });

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
      throw new Error("problemC | No se llamó a la stanza correcta");
    }
  });

  it("Problem D | Consologuea la cuarta stanza versión Async Await o un error", async () => {
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    await problemD();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      throw new Error("problemD | No se llamo a promisifiedReadFile");
    try {
      if (blue.mock.calls.length) {
        expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
        promisifiedReadFileSpy.mockRestore();
        blue.mockRestore();
      }
    } catch (error) {
      if (blue.mock.calls[0][0] !== stanzasOne[3])
        throw new Error("problemD | No se llamó a la stanza correcta");
      expect(magenta).toHaveBeenCalledWith(new Error(error));
      promisifiedReadFileSpy.mockRestore();
      magenta.mockRestore();
    }
  });

  it("Problem E | Consologuea la tercer stanza y luego la cuarta stanza o su respectivo error, versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    await problemE();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      throw new Error("problemD | No se llamo a promisifiedReadFile");
    try {
      if (blue.mock.calls.length > 1) {
        expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
        expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
        promisifiedReadFileSpy.mockRestore();
        blue.mockRestore();
      }
    } catch (error) {
      if (
        (blue.mock.calls[0] && blue.mock.calls[0][0] !== stanzasOne[2]) ||
        (blue.mock.calls[1] && blue.mock.calls[1][0] !== stanzasOne[3])
      )
        throw new Error("problemD | No se llamó a la stanza correcta");
      expect(magenta).toHaveBeenCalledWith(new Error(error));
      promisifiedReadFileSpy.mockRestore();
      magenta.mockRestore();
      blue.mockRestore();
    }
  });

  it("Problem F | Consologuea la tercer stanza y luego la cuarta stanza o un error para cualquiera de los casos, versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    await problemF();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      throw new Error("problemD | No se llamo a promisifiedReadFile");
    try {
      if (blue.mock.calls.length > 1) {
        expect(blue).toHaveBeenCalledWith(stanzasOne[2]);
        expect(blue).toHaveBeenCalledWith(stanzasOne[3]);
        promisifiedReadFileSpy.mockRestore();
        blue.mockRestore();
      }
    } catch (error) {
      if (
        (blue.mock.calls[0] && blue.mock.calls[0][0] !== stanzasOne[2]) ||
        (blue.mock.calls[1] && blue.mock.calls[1][0] !== stanzasOne[3])
      )
        throw new Error("problemD | No se llamó a la stanza correcta");
      expect(magenta).toHaveBeenCalledWith(new Error(error));
      promisifiedReadFileSpy.mockRestore();
      magenta.mockRestore();
      blue.mockRestore();
    }
  });
});

describe("02 | Ejercicios - Async Await (poem-two)", () => {
  afterAll(async () => {
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 250));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Problem A | Consologuea la primer y segunda stanza versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    await problemAx();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      throw new Error("problemA | No se llamo a promisifiedReadFile");
    try {
      if (blue.mock.calls.length > 1) {
        expect(blue).toHaveBeenCalledWith(stanzasTwo[0]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[1]);
        blue.mockRestore();
        promisifiedReadFileSpy.mockRestore();
      }
    } catch (error) {
      blue.mockRestore();
      promisifiedReadFileSpy.mockRestore();
      throw new Error("problemA | No se llamó a la stanza correcta");
    }
  });

  it("Problem B | Consologuea todas las stanzas de poem-two en cualquier orden, versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    await problemBx();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      throw new Error("problemB | No se llamo a promisifiedReadFile");
    try {
      if (blue.mock.calls.length > 1) {
        expect(blue).toHaveBeenCalledWith(stanzasTwo[0]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[1]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[2]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[3]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[4]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[5]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[6]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[7]);
        blue.mockRestore();
        promisifiedReadFileSpy.mockRestore();
      }
    } catch (error) {
      blue.mockRestore();
      promisifiedReadFileSpy.mockRestore();
      throw new Error("problemB | No se llamó a la stanza correcta");
    }
  });

  it("Problem C | Consologuea todas las stanzas de poem-two en orden, versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    await problemCx();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      throw new Error("problemC | No se llamo a promisifiedReadFile");
    try {
      if (blue.mock.calls.length > 1) {
        expect(blue).toHaveBeenCalledWith(stanzasTwo[0]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[1]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[2]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[3]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[4]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[5]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[6]);
        expect(blue).toHaveBeenCalledWith(stanzasTwo[7]);
        blue.mockRestore();
        promisifiedReadFileSpy.mockRestore();
      }
    } catch (error) {
      blue.mockRestore();
      promisifiedReadFileSpy.mockRestore();
      throw new Error("problemC | No se llamó a la stanza correcta");
    }
  });

  it("Problem D | Consologuea todas las stanzas de poem-two en orden o un error, versión Async Await", async () => {
    const blue = jest.spyOn(utils, "blue");
    const magenta = jest.spyOn(utils, "magenta");
    const promisifiedReadFileSpy = jest.spyOn(utils, "promisifiedReadFile");
    await problemDx();
    if (promisifiedReadFileSpy.mock.calls.length === 0)
      throw new Error("problemD | No se llamo a promisifiedReadFile");
    try {
      expect(blue).toHaveBeenCalledWith(stanzasTwo[0]);
      expect(blue).toHaveBeenCalledWith(stanzasTwo[1]);
      expect(blue).toHaveBeenCalledWith(stanzasTwo[2]);
      expect(blue).toHaveBeenCalledWith(stanzasTwo[3]);
      expect(blue).toHaveBeenCalledWith(stanzasTwo[4]);
      expect(blue).toHaveBeenCalledWith(stanzasTwo[5]);
      expect(blue).toHaveBeenCalledWith(stanzasTwo[6]);
      expect(blue).toHaveBeenCalledWith(stanzasTwo[7]);
      blue.mockRestore();
      promisifiedReadFileSpy.mockRestore();
    } catch (error) {
      if (
        (blue.mock.calls[0] && blue.mock.calls[0][0] !== stanzasOne[0]) ||
        (blue.mock.calls[1] && blue.mock.calls[1][0] !== stanzasOne[1]) ||
        (blue.mock.calls[2] && blue.mock.calls[2][0] !== stanzasOne[2]) ||
        (blue.mock.calls[3] && blue.mock.calls[3][0] !== stanzasOne[3]) ||
        (blue.mock.calls[4] && blue.mock.calls[4][0] !== stanzasOne[4]) ||
        (blue.mock.calls[5] && blue.mock.calls[5][0] !== stanzasOne[5]) ||
        (blue.mock.calls[6] && blue.mock.calls[6][0] !== stanzasOne[6]) ||
        (blue.mock.calls[7] && blue.mock.calls[7][0] !== stanzasOne[7])
      )
        throw new Error("problemD | No se llamó a la stanza correcta");
      expect(magenta.mock.calls.length).toBe(1);
      // expect(magenta).toHaveBeenCalledWith(new Error(error));
      promisifiedReadFileSpy.mockRestore();
      magenta.mockRestore();
      blue.mockRestore();
    }
  });
});
