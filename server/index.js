const express = require('express')
const app = express()
const port = 3001
const mCtrl = require('./controllers/messages_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.get('', (req, res) => res.send("<h1>Welcome to the Home Page</h1>"))
app.get('/api/messages', mCtrl.read)
app.post('/api/messages', mCtrl.create)
app.put('/api/messages/:id', mCtrl.update)
app.delete('/api/messages/:id', mCtrl.delete)

app.listen(port, () => console.log(`I'm listening on Port: ${port}`))