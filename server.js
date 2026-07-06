const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
const productRoutes = require('./routes/productRoutes')
app.use('/api/products', productRoutes)

const authRoutes = require('./routes/authRoutes')
app.use('/api/auth', authRoutes)

const orderRoutes = require('./routes/orderRoutes')
app.use('/api/orders', orderRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB connection error:', err))

app.get('/', (req, res) => {
  res.send('Glim API is running 🧶')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})