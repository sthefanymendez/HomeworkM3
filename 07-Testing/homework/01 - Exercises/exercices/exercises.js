var multiplicar = (num) => {
   return n * num;
};

var nuevaPropiedad = (object) => {
   object.nuevaPropiedad = 'Nuevo Valor';
   return object;
};

const returnTruth = (truth) => {
   return truth === 'Verdadero' ? truth : truth;
};

const returnValue = (value) => {
   return typeof value === 'null' ? value : value;
};

var sizeOfNumber = (option) => {
   return option === 'A' ? 1 : option === 'B' ? 3 : option === 'C' ? 6 : 9;
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

exports.module = {
   multiplicar,
   nuevaPropiedad,
   returnTruth,
   returnValue,
   sizeOfNumber,
   nuevaFrase,
   nuevoArreglo,
};
