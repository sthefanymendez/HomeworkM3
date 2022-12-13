const { nivelUno, nivelDos, nivelTres, nivelCuatro } = require('./niveles');

describe('PARTE 01', () => {
   describe('NIVEL 01', () => {
      it('Debe devolver la operación correcta entre "A" y "B"', () => {
         expect(nivelUno(0, 1)).toBe(1);
         expect(nivelUno(2, 5)).toBe(7);
         expect(nivelUno(10, 28)).toBe(38);
      });
   });

   describe('NIVEL 02', () => {
      it('Debe devolver el string correspondiente si el length es menor a dos', () => {
         expect(nivelDos('')).toBe('');
         expect(nivelDos('a')).toBe('a');
         expect(nivelDos('b')).toBe('b');
      });
      it('Debe devolver el string correspondiente si el length es  dos', () => {
         expect(nivelDos('aa')).toBe('a');
         expect(nivelDos('ab')).toBe('a');
         expect(nivelDos('bc')).toBe('b');
      });
      it('Debe devolver el string correspondiente si el length es mayor a dos', () => {
         expect(nivelDos('aaaa')).toBe('aa');
         expect(nivelDos('abgdg')).toBe('agg');
         expect(nivelDos('abbsbbbdl')).toBe('abbbl');
      });
   });
   describe('NIVEL 03', () => {
      it('Debe devolver un arreglo con los elementos de ambos arreglos unidos y en orden', () => {
         expect(nivelTres([0], [1])).toStrictEqual([0, 1]);
         expect(nivelTres([1, 2], [3, 4])).toStrictEqual([1, 2, 3, 4]);
         expect(nivelTres([1], [2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
         expect(nivelTres([1, 2, 3], [4])).toStrictEqual([1, 2, 3, 4]);
         expect(nivelTres([1, 2], [1, 2])).toStrictEqual([1, 1, 2, 2]);
      });
   });
   describe('NIVEL 04', () => {
      it('Debe devolver True si es un número Henry', () => {
         expect(nivelCuatro(1729)).toBe(true);
         expect(nivelCuatro(1)).toBe(true);
         expect(nivelCuatro(81)).toBe(true);
         expect(nivelCuatro(1458)).toBe(true);
      });
      it('Debe devolver False si NO es un número Henry', () => {
         expect(nivelCuatro(1997)).toBe(false);
         expect(nivelCuatro(1998)).toBe(false);
         expect(nivelCuatro(18)).toBe(false);
      });
   });
});
