const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const auth = require('../middleware/auth')

// POST create a new order (protected)
router.post('/', auth, async (req, res) => {
  try {
    const { items, totalPrice, shipping } = req.body

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No items in order' })
    }

    const order = new Order({
      user: req.user.id,
      items,
      totalPrice,
      shipping,
    })

    const saved = await order.save()
    res.status(201).json(saved)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// GET all orders for logged-in user (protected)
router.get('/myorders', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 })
    res.json(orders)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// GET single order by id (protected)
router.get('/:id', auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    if (!order) return res.status(404).json({ message: 'Order not found' })
    if (order.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' })
    }
    res.json(order)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router