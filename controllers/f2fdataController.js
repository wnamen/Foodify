var unirest = require('unirest');

function index(req, res) {
  unirest.get('http://food2fork.com/api/search?key=1b70f7c3dffb5c592b9bb7ae1accc823')
  .header("Accept", "JSON")
  .end(function (result) {
    res.json(JSON.parse(result.body));
  });
}

function create(req, res){

}

function show(req, res){
  var data = req.query.q;

  console.log(data);
  unirest.get('http://food2fork.com/api/search?key=1b70f7c3dffb5c592b9bb7ae1accc823&q=' + data)
  .header("Accept", "JSON")
  .end(function (result) {
    res.json(JSON.parse(result.body));
  });
}

function destroy(req, res){

}

function update(req, res){

}



module.exports = {
	index: index,
	create: create,
	show: show,
	destroy: destroy,
	update: update
};
