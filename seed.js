const mongoose = require('mongoose')
const Product = require('./models/Product')
require('dotenv').config()

const products = [
  { name: 'market tote bag', price: 85, oldPrice: 110, category: 'bags', emoji: '🧺', bg: '#ede8f7', image: '/products/tote-bag.jpg', description: 'A handmade crochet tote bag perfect for everyday use. Made with soft cotton yarn.' },
  { name: 'chunky cardigan', price: 220, category: 'cardigans', emoji: '🧥', bg: '#f5ede3', image: '/products/cardigan.jpg', description: 'Cozy oversized cardigan crocheted with chunky yarn. Perfect for cold days.' },
  { name: 'flower hair clip', price: 35, category: 'accessories', emoji: '🌸', bg: '#fbe8f0', image: '/products/hair-clip.jpg', description: 'Adorable crochet flower hair clip. Available in multiple colors.' },
  { name: 'plant hanger', price: 60, oldPrice: 75, category: 'home', emoji: '🪴', bg: '#ede8f7', image: '/products/plant-hanger.jpg', description: 'Boho macrame-style crochet plant hanger. Fits pots up to 15cm.' },
  { name: 'mini bucket bag', price: 95, category: 'bags', emoji: '👜', bg: '#f5ede3', image: '/products/bucket-bag.jpg', description: 'Cute mini bucket bag with a drawstring closure. Great for going out.' },
  { name: 'bow headband', price: 40, category: 'accessories', emoji: '🎀', bg: '#fbe8f0', image: '/products/headband.jpg', description: 'Sweet crochet bow headband. Stretchy and comfortable for all day wear.' },
  { name: 'table coasters set', price: 55, category: 'home', emoji: '🌿', bg: '#e8f5e9', image: '/products/coasters.jpg', description: 'Set of 4 handmade crochet coasters. Protects your surfaces in style.' },
  { name: 'crop cardigan', price: 195, oldPrice: 230, category: 'cardigans', emoji: '🧶', bg: '#f5ede3', image: '/products/crop-cardigan.jpg', description: 'Trendy cropped crochet cardigan. Lightweight and perfect for layering.' },
]

async function seed() {
  await mongoose.connect(process.env.MONGO_URI)
  console.log('✅ Connected to MongoDB')

  await Product.deleteMany()
  console.log('🗑️ Cleared existing products')

  await Product.insertMany(products)
  console.log('🧶 Products seeded successfully!')

  mongoose.connection.close()
}

seed()