import express from 'express'
import cors from 'cors'
import connectDB from './utils/db.js'

const app = express()
app.use(cors())

const PORT = process.env.PORT || 3000

connectDB();

app.get('/', (req, res) => {
    res.send(`Hello, I am running on port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})