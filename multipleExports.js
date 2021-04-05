function hello() {
  console.log('hello from export.js file')
}

const course = {
  1: 'node',
  2: 'express',
  3: 'react',
  4: 'mongo',
  5: 'ajax/deployment'
} // add deployment in week 5 to the object

// write an array of things you hope to learn in the course
const thingsToLearn = ['js', 'fat arrow functions', 'fullstack apps']
// export that array
// require that array in requireModules and print it

module.exports = {
  hello: hello,
  course: course,
  title: "Welcome to Node",
  things: thingsToLearn
}


