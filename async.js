console.log('started')
const{readFile,writeFile}=require('fs')
const first=readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    result
})
const second=readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second = result
})
writeFile('./content/async.txt',`this is the async ${first} and ${second}`,(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
    console.log('finished')

})

console.log('starting a new one')