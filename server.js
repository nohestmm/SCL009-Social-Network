var express = require('express');
var app = express();

<<<<<<< HEAD
app.use(express.static(__dirname + '/src'));//reconoce la informacion 

app.get('/',function(request, response){
  response.sendFile(__dirname + '/index.html');//al hacer la peticion le dice que levante en 3000
});

app.listen(3000, function(){
=======
app.use(express.static(__dirname + '/src'));

app.get('/',function(request, response){
  response.sendFile(__dirname + '/index.html');
});

app.listen(4200, function(){
>>>>>>> c9aad88c5ca6b5e0bd30c6c5b3fd01a1c9f0ff2c
  console.log('Server Express Ready!');
});