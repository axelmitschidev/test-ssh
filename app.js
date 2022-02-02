const express = require('express')
const app = express()

const PORT = 8080

app.get('/', (req, res) => {
	res.render('home.html.twig');
})

app.listen(PORT, () => {
	console.log('Listen on http://localhost:' + PORT)
})
