function index(req, res){
	res.json({
		message: "Welcome to foodify!",
		documentation_url: "https://github.com/wnamen/foodify/api.md",
		base_url: "http://foodifyme.herokuapp.com",
		endpoints: [
			{method: "GET", path: "/api", description: "Describes available endpoints"},
			{method: "GET", path: "/api/recipes", description: "Renders all recipes"},
			{method: "GET", path: "/api/recipes/:id", description: "Renders a specific recipe"},
			{method: "POST", path: "/api/recipes", description: "Creates new recipe"},
			{method: "DELETE", path: "/api/recipes/:id", description: "Deletes a recipe"},
			{method: "PUT", path: "/api/recipes/:id", description: "Updates a recipe"},
			{method: "GET", path: "/api/f2fdata", description: "Renders top 30 recipes from API"},
			{method: "GET", path: "/api/f2fdata/query", description: "Searches and renders recipes by ingredients"},
			{method: "GET", path: "/api/ingredients", description: "Renders ingredients"},
			{method: "POST", path: "/api/ingredients", description: "Creates new ingredient"}
		]
	});
}

module.exports.index = index;
