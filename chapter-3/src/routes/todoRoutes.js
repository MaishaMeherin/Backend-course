import express from 'express'
import db from '../db.js'

const router = express.Router()


//Get all todos for logged in users
router.get('/', (req, res) => {})

//Create a new todo
router.post('/', (req, res) => {})

//Update a todo-> check up the database and match the ID of the specific todo
//we can do this dynamic query parameter->:id
router.put('/:id', (req, res) => {})

//Delete a todo
router.delete('/:id', (req, res) => {})

export default router