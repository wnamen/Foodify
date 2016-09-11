var express = require('express'),
  app = express();
  bodyParser = require('body-parser'),
  controllers = require('./controllers'),
  unirest = require('unirest');


  app.use(bodyParser.urlencoded({ extended: true }));


  // allow cross origin requests (optional)
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin: http://food2fork.com/api/search?key=1b70f7c3dffb5c592b9bb7ae1accc823");
    res.header("Access-Control-Allow-Methods: GET, POST");
    res.header("Access-Control-Allow-Credentials: true");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


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

   app.get('/api/ingredients', controllers.ingredients.index);
  //  app.get('/api/recipes', controllers.recipes.index);
   app.get('/api/f2fdata', controllers.f2fdata.index);
   app.get('/api/f2fdata/query', controllers.f2fdata.show);
  //  app.get('/api/f2fdata', controllers.f2fdata.ingredients);

  //Listen on Port 8080
  app.listen(process.env.PORT || 8080, function () {
    console.log('Express server is up and running on http://localhost:8080/');
  });
