const { hello, course }  = require('./multipleExports')
const title2 = require('./multipleExports').title
const homework = require('./multipleExports').things
const myModule = require('./singleExport')

hello()

for (let week in course) {
  console.log('Week %i, topic: %s', week, course[week])
}

console.log(title2)
console.log(homework)

myModule()