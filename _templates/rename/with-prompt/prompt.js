const fs = require("fs")

module.exports = [
	{
		type: "autocomplete",
		name: "section",
		message: "Select section of clone component.",
		choices: fetchSectionNames,
	},
	{
		type: "autocomplete",
		name: "component",
		message: "Select component for clone",
		choices: fetchComponentNames,
	},
	{
		type: "input",
		name: "name",
		message: "Type name of child component",
	},
]

function fetchSectionNames() {
	return fs.readdirSync("./src/components/")
}
function fetchComponentNames() {
	return fs
		.readdirSync(`./src/components/${this.enquirer.answers.section}`, {
			withFileTypes: true,
		})
		.filter((entry) => entry.isDirectory())
}
