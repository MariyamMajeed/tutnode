const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welocme to the home page')
    }
    if(req.url==='/about'){
        res.end('Welcome to the about page')
    }
    else
    {
    res.end(`<h1>OOPSIE!</h1>
     <p1>we can't seem to find the page you requested for</p>
     <a href="/">GO BACK TO HOME PAGE</a>
     `)
    }

})
server.listen(5000)