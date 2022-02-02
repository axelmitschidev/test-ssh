const express = require('express')
const app = express()

const PORT = 8080

app.get('/', (req, res) => {
	res.send('test')
})

app.listen(8080, () => {
	console.log('Listen on http://localhost:' + PORT)
})