const nivelUno = (a, b) => {
   return a + b;
};

const nivelDos = (letras) => {
   return letras
      .split('')
      .filter((l, i) => {
         return i % 2 === 0;
      })
      .join('');
};

const nivelTres = (a, b) => {};

module.exports = { nivelUno, nivelDos, nivelTres };
