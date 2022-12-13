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

const nivelTres = (a, b) => {
   return a.concat(b).sort();
};

const nivelCuatro = (num) => {
   let tot = 0;
   num.toString()
      .split('')
      .forEach((n) => {
         tot += Number(n);
      });
   let rev = Number(tot.toString().split('').reverse().join(''));
   return rev * tot === num;
};

module.exports = { nivelUno, nivelDos, nivelTres, nivelCuatro };
