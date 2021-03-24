// NAMED FUNCTIONS
function oldSquare(x) {
  return x * x;
}

console.log(oldSquare(4))

const newSquare = function(x) {
  return x * x;
}

console.log(newSquare(3))

const newSyntaxtSquare = (x) => {
  return x * x;
}

console.log(newSyntaxtSquare(3))

// ANONYMOUS FUNCTIONS

funcion(el, idx) {
  el.style.color = red;
  el.id = idx;
}

(el, idx) => {
  el.style.color = red;
  el.id = idx;
}
