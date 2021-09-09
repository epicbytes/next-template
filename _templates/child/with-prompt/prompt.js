const fs = require("fs")

module.exports = [
	{
		type: "autocomplete",
		name: "section",
		message: "Select section for generation component.",
		choices: fetchSectionNames,
	},
	{
		type: "autocomplete",
		name: "component",
		message: "Select component for place children",
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
