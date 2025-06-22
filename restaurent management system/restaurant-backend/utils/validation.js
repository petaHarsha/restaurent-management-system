const Joi = require('joi');

// User validation
exports.validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).max(15).required(),
    password: Joi.string().min(6).required()
  });
  
  return schema.validate(user);
};

// Menu item validation
exports.validateMenuItem = (item) => {
  const schema = Joi.object({
    category: Joi.string().valid('Starters', 'Mains', 'Desserts', 'Drinks').required(),
    name: Joi.string().required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().allow('')
  });
  
  return schema.validate(item);
};

// Booking validation
exports.validateBooking = (booking) => {
  const schema = Joi.object({
    date: Joi.date().required(),
    time: Joi.string().required(),
    table: Joi.string().required(),
    guests: Joi.number().min(1).required(),
    specialRequests: Joi.string().allow(''),
    preOrder: Joi.array().items(
      Joi.object({
        item: Joi.string().required(),
        quantity: Joi.number().min(1).required()
      })
    )
  });
  
  return schema.validate(booking);
};