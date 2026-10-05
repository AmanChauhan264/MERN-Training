const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url}New req received\n`;
    fs.appendFile('log.txt',log, (err, data) => {
       switch(req.url){
        case '/': res.end("Home page");
        break;
        case '/about': res.end("I am about page")
        break;
        default: res.end("404 ERROR")
       }
    })

});

myServer.listen(8000, () => console.log("server started"));
