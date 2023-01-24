module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false;
  for (let a = 0; a < str.length; a++) {
    bracketsConfig.forEach((i) => {
      if (str.includes(i.join(''))) {
        str = str.replace(i.join(''), '');
        a = 0;
      }
    });
  }
  if (str.length) return false;
  else return true;
};
