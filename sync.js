console.log('started')
const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt','utf8');
const second= readFileSync('./content/second.txt','utf8');

console.log(first,second)


const result = writeFileSync('./content/result.txt',`this is the new content i am writing ${first} and  ${second}`)
console.log('finished')
//const third = readFileSync('./content/result.txt','utf8')
//console.log(third)

console.log('starting a new one')
