const fs = require("fs")

module.exports = [
	{
		type: "autocomplete",
		name: "section",
		message: "Select section for generation component.",
		choices: fetchSectionNames(),
	},
	{
		type: "input",
		name: "name",
		message: "Type name of component",
	},
]

function fetchSectionNames() {
	return fs.readdirSync("./src/components/")
}
