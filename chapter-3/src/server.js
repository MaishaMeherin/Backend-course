import express from 'express'
import path, { dirname}  from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 5003 //checks if there is a port in the environment variable else uses 5000

//get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url)
//get the directory name from the file path
const __dirname = dirname(__filename)

//Middleware
app.use(express.json())
//serves the HTML file from the public folder
//tells express to serve all the files in the public folder as static assets/files. Any request for the css file will be resolved to the public folder.
app.use(express.static(path.join(__dirname, '../public')))

//serving up the HTML file from the public folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
console.log("Hello world!")
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
})