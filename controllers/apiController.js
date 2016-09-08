function index(req, res){
	res.json({
		message: "Welcome to foodify!",
		documentation_url: "https://github.com/wnamen/foodify/api.md",
		base_url: "http://foodifyme.herokuapp.com",
		endpoints: [
			{method: "GET", path: "/api", description: "Describes available endpoints"},
			{method: "GET", path: "/api/recipes", description: "Renders recipes"},
			{method: "POST", path: "/api/recipes", description: "Creates new recipe"}, 
			{method: "DELETE", path: "/api/recipes/:id", description: "Deletes ingredients"},
			{method: "PUT", path: "/api/recipes/:id", description: "Updates recipes"}
		]
	});
}

module.exports.index = index;