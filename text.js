// write a function called reverse that reverses a string

function reverse(str) {
  return str.split('').reverse().join('')
}

module.exports = {
  reverse: reverse
}