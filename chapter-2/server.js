//imports Express in a variable called express
const express = require('express')
//define backend app and envoke express as a function
const app = express()
//IP Address is the location of the device and Port is a location within that device that is listening for incoming requests
const PORT = 8383


//backend is hardware running software that is connected to the internet, listens to incoming requests to its IP Address specifically at that port
//app.listen() is a method that listens to incoming requests on the specified port and runs a callback function
app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))