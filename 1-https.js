var http = require('http');

//create a server object:
http.createServer((req, res)=> {
    if(req.url==='/')
    {
        res.write('Hello World!');
    }
    else if(req.url==='/about')
    {
        res.write('You are on about');
    }
   //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080