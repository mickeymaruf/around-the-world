const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const places = require('./data/places.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World! <br /> <a href="/places">/places</a> <br /> <a href="/place/fb210fbd-7b0c-48bc-b82f-09df0dfe1959">/place/{id}</a>')
})

app.get('/places', (req, res) => {
    res.send(places)
})

app.get('/place/:id', (req, res) => {
    const id = req.params.id;
    const place = places.find(place => place.id === id)
    res.send(place);
})

app.get('/hotels/:id', (req, res) => {
    const id = req.params.id;
    const place = places.find(place => place.id === id)
    const hotels = place.hotels;
    res.send(hotels || []);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})