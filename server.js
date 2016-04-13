var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

console.log('Server is running on port: ' + port);

app.get('/', function(request, response) {
    response.sendfile('./views/html/home.html');  // sends the user to the home page.
 //    response.send('home');
});

app.get('/about', function(request, response) {
    response.sendfile('./views/html/about.html'); 
  //  response.send('about');
});

// 404 catch-all handler (middleware)
app.use(function(request, response, next) {
        response.status(404);
    response.sendfile('./views/html/404.html'); 
 //   response.send('404');
});

// 500 error handler (middleware)
app.use(function(error, request, response, next) {
        console.error(error.stack);
        response.status(500);
    response.sendfile('./views/html/500.html'); 
 //   response.send(500);
});

app.listen(port);