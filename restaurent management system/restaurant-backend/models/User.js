const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  preferences: { type: String, default: '' },
  bookings: [
    {
      date: Date,
      type: String,
      details: String,
      items: [
        {
          name: String,
          price: Number,
          quantity: Number
        }
      ],
      total: Number,
      status: String
    }
  ],
  ratings: [
    {
      date: Date,
      rating: Number,
      comment: String
    }
  ]
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare passwords
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);