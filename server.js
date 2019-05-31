var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));//reconoce la informacion 

app.get('/',function(request, response){
  response.sendFile(__dirname + '/index.html');//al hacer la peticion le dice que levante en 3000
});

app.listen(3000, function(){
  console.log('Server Express Ready!');
});