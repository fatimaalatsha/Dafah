const http = require('http');
// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It Works!'
//     });
// });

const port = 3000;

//  http.createServer(function (req, res){
//     res.send("Hello").end();

// }).listen(port, function() {
//     console.log('Server is connected at http://localhost:3000')
// });




//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(port,function() {
        console.log('Server is connected at http://localhost:3000')})
    // });); //the server object listens on port 8080



// server.listen(port, function() {
//     console.log('Server is connected at http://localhost:3000')
// });

