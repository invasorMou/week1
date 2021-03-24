const { hello, course }  = require('./multipleExports')
const title = require('./multipleExports').title

const myModule = require('./singleExport')

hello()

for (let week in course) {
  console.log('Week %i, topic: %s', week, course[week])
}

console.log(title)


myModule()