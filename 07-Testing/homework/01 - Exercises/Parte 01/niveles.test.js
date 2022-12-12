const { nivelUno, nivelDos, nivelTres } = require('./niveles');

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
});
