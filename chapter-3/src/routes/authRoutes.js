import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router() //creates a new router object to which we can attach routes

router.post('/register', (req, res) => {

})

router.post('/login', (req, res) => {})


export default router