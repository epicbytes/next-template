const { createServer } = require("https")
const { parse } = require("url")
const next = require("next")
const fs = require("fs")
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()
const domain = fs.readFileSync("domain", "utf8").trim()
const httpsOptions = {
	key: fs.readFileSync(`./out/${domain}.key`),
	cert: fs.readFileSync(`./out/${domain}.crt`),
}
app.prepare().then(() => {
	createServer(httpsOptions, (req, res) => {
		const parsedUrl = parse(req.url, true)
		handle(req, res, parsedUrl)
	}).listen(3000, (err) => {
		if (err) throw err
		console.log(`> Server started on https://${domain}:3000`)
	})
})
