const seguridadAntiTrolls = require('./seguridadAntiTrolls');

describe('PARTE 02', () => {
   describe('Seguridad Anti Trolls', () => {
      it('Debe devolver el mismo string pero habiendo eliminado todas las vocales', () => {
         expect(seguridadAntiTrolls('This website is for losers LOL!')).toBe(
            'Ths wbst s fr lsrs LL!'
         );
         expect(seguridadAntiTrolls('What are you, a communist?')).toBe(
            'Wht r y,  cmmnst?'
         );
      });
   });
});
