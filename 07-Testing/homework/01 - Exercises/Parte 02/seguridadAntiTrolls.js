const seguridadAntiTrolls = (string) => {
   return string
      .split('')
      .filter((l) => {
         return !'AaEeIiOoUu'.includes(l);
      })
      .join('');
};

module.exports = seguridadAntiTrolls;
