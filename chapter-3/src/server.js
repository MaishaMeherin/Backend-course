import express from 'express'

const app = express()
const PORT = process.env.PORT || 5003 //checks if there is a port in the environment variable else uses 5000

console.log("Hello world!")
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
})