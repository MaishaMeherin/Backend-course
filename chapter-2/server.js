//The adress of this server connected to the network is: 
//URL: http://localhost:8383
//IP Address: 127.0.0.1:8383
//both of the above are the same thing and are used to access the server

const express = require('express')
const app = express()
const PORT = 8383
let data = ['james']

//Middleware: a function that has access to the request and response object
app.use(express.json()) //this middleware is used to parse the incoming request with JSON payloads

//HTTP verbs & routes
//HTTP verbs are methods that are used to interact with the server

//the method informs the nature of the request and the route is a further subdirectory (basically we direct the request to the body of the code to respond appropriately, and these locations or routes are called END POINTS)

//(Type-01) Website endpoints-> sending back HTML and they typically come when a user enters a URL in the browser
app.get('/', (req, res) => {
    console.log("User requested the home page")
    res.send(`
        <body style="background: pink;
        color: blue;">
        <h1>Data</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        <script>console.log('This is a script')</script>
    `)
})

app.get('/dashboard', (req, res) => {
    res.send(`
    <body style="background: pink;
    color: blue;">
        <h1>Dashboard</h1>
        <a href="/">Home</a>
    </body>
`)
})


//(Type-02) API endpoints (non visual)-> sending back JSON and they typically come when a user makes a request from a client side application

//CRUD-method: Create-POST, Read-GET, Update-Put, Delete-DELETE
app.get('/api/data', (req, res) => {
    console.log('this is for data')
    res.send(data)
})

app.post('/api/data', (req, res) => {
    //someone wants to create a user (for example when they hit a sign up button)
    //the user clicks a signup button after entering their details, and the details are sent as network request to the server to handle the action
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name) //this is a simple way to add a new user to the data object
    res.sendStatus(201)
})    

app.delete('/api/data', (req,res) =>{
    data.pop()
    console.log('we deleted the element off the end of the array')
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))