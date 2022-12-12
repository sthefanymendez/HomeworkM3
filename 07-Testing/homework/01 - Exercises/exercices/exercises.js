var multiplicarPorTres = (num) => {
   return 3 * num;
};

var nuevaPropiedad = (object) => {
   object.nuevaPropiedad = 'Nuevo valor';
   return object;
};

const returnTruth = (truth) => {
   if (typeof truth !== 'boolean') return 'No es booleano';
   return truth ? 'Verdadero' : 'Falso';
};

var nuevaFrase = (name, lastname, age) => {
   return (
      'Hola! Mi nombre es ' +
      name +
      ' ' +
      lastname +
      '. Tengo ' +
      age +
      ' años.'
   );
};

var nuevoArreglo = (option) => {
   var arr = [3, 'sd', undefined, true, null, [false]];
   option > 10 ? arr.push('Es mayor') : arr.push('Es menor');
   return arr;
};

module.exports = {
   multiplicarPorTres,
   nuevaPropiedad,
   returnTruth,
   nuevaFrase,
   nuevoArreglo,
};
