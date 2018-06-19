function diameter(r) {
  return 2 * r 
}

// console.log(diameter(5))

function circumference(r) {
  return diameter(r) * Math.PI
}

// console.log(circumference(10))

function area(r) {
  return Math.PI * Math.pow(r, 2)
}

// to make these functions available in other files
module.exports = {
  // diameter: diameter (if key and value is same just call as below)
  diameter,
  circumference,
  area
}