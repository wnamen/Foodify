var express = require('express'),
  app = express();
  bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true}));


  // allow cross origin requests (optional)
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  /************
   * DATABASE *
   ************/

  // var db = require('./models');

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

  //Listen on Port 3000
  app.listen(process.env.PORT || 3000, function () {
    console.log('Express server is up and running on http://localhost:3000/');
  });
