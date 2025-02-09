import express from 'express'
import cors from 'cors'
import connectDB from './utils/db.js'
import itemRoutes from './controllers/itemController.js'

const app = express()
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 3000

connectDB();

app.get('/', (req, res) => {
    res.send(`Hello, I am running on port ${PORT}`)
})

app.use('/api', itemRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})