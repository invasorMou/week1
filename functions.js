// NAMED FUNCTIONS
function oldSquare(x) {
  return x * x;
}

console.log(oldSquare(4))

const newSquare = function(x) {
  return x * x;
}

console.log(newSquare(3))

const newSyntaxSquare = (x) => {
  return x * x;
}
// what happens if we get rid of the {} ? any difference?

console.log(newSyntaxSquare(3))

// ANONYMOUS FUNCTIONS

f1 = function(el, idx) {
  el.style.color = red;
  el.id = idx;
}

f2 = (el, idx) => {
  el.style.color = red;
  el.id = idx;
}
