const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize Razorpay instance
const razorpayInstance = new Razorpay({
  key_id: 'rzp_test_Yq4PPi0sH7WUKV',          // Replace with your Razorpay key_id
  key_secret: 'NXtvihgVj07eHQbCKHGYLafI'   // Replace with your Razorpay key_secret
});

// API route
app.post('/create-order', async (req, res) => {
  try {
    const { amount } = req.body;  // e.g., 500

    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }

    const options = {
      amount: amount * 100, // Razorpay works with paise
      currency: 'INR',
      receipt: `receipt_${Math.floor(Math.random() * 10000)}`
    };

    const order = await razorpayInstance.orders.create(options);
    console.log('Order Created:', order);
    res.json(order);

  } catch (error) {
    console.error('Error while creating order:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
