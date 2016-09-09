var express = require('express'),
  app = express();
  bodyParser = require('body-parser'),
  controllers = require('./controllers');

  app.use(bodyParser.urlencoded({ extended: true}));


  /************
   * DATABASE *
   ************/

  var db = require('./models');

  /************
   * ROUTES *
   ************/

   // Serve static files from the `/public` directory:
   // i.e. `/images`, `/scripts`, `/styles`
   app.use(express.static(__dirname + '/public'));

   /*
    * HTML Endpoints
    */

   app.get('/', function homepage(req, res) {
     res.sendFile(__dirname + '/views/index.html');
   });

   /*
   * JSON API Endpoints
   */

   app.get('/api', controllers.api.index);

   app.get('/api/recipes', controllers.recipes.index);

  //Listen on Port 8080
  app.listen(process.env.PORT || 8080, function () {
    console.log('Express server is up and running on http://localhost:8080/');
  });
