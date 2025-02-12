function uppercase (text) {
  return text.toUpperCase();
}

function reverse (text) {
  return text.split('').reverse().join('');
}

module.exports = {uppercase, reverse};