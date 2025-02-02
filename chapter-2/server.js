//The adress of this server connected to the network is: 
//URL: http://localhost:8383
//IP Address: 127.0.0.1:8383
//both of the above are the same thing and are used to access the server

//imports Express in a variable called express
const express = require('express')
//define backend app and envoke express as a function
const app = express()
//IP Address is the location of the device and Port is a location within that device that is listening for incoming requests
const PORT = 8383

//HTTP verbs & routes
//HTTP verbs are methods that are used to interact with the server

//the method informs the nature of the request and the route is a further subdirectory (basically we direct the request to the body of the code to respond appropriately, and these locations or routes are called END POINTS)
app.get('/', (req, res) => {
    //this is endpoint number 1
    console.log("Yay i hit an endpoint", req.method)
    res.sendStatus(201)
})

app.get('/dashboard', (req, res) => {
    console.log("Oh now i hit /dashboard endpoint")
    res.send("Welcome to the dashboard")
})
//backend is hardware running software that is connected to the internet, listens to incoming requests to its IP Address specifically at that port
//app.listen() is a method that listens to incoming requests on the specified port and runs a callback function
app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))