//The adress of this server connected to the network is: 
//URL: http://localhost:8383
//IP Address: 127.0.0.1:8383
//both of the above are the same thing and are used to access the server

const express = require('express')
const app = express()
const PORT = 8383

//HTTP verbs & routes
//HTTP verbs are methods that are used to interact with the server

//the method informs the nature of the request and the route is a further subdirectory (basically we direct the request to the body of the code to respond appropriately, and these locations or routes are called END POINTS)

//(Type-01) Website endpoints-> sending back HTML and they typically come when a user enters a URL in the browser
app.get('/', (req, res) => {
    res.send('<h1>homepage/h1>')
})

app.get('/dashboard', (req, res) => {
    res.send('<h1>dashboard/h1>')
})


//(Type-02) API endpoints (non visual)-> sending back JSON and they typically come when a user makes a request from a client side application



app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))