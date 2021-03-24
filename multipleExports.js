function hello() {
  console.log('hello from export.js file')
}

const course = {
  1: 'node',
  2: 'express',
  3: 'react',
  4: 'mongo'
}

module.exports = {
  hello: hello,
  course: course,
  title: "Welcome to Node"
}


