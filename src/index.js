module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false;
  for (let a = 0; a < str.length; a++) {
    bracketsConfig.forEach((i) => {
      if (!str.includes(i[0] || !str.includes(i[1]))) return false;
      if (str.includes(i.join(''))) {
        str = str.replace(i.join(''), '');
        a = 0;
      }
    });
  }
  if (str.length != 0) return false;
  else return true;
};
