const User = require('../models/user.model');

const userRepository = {
  createUser: async (userData) => {
    try {
      const user = new User(userData);
      return await user.save();
    } catch (error) {
      console.error('Error creating user:', error.message);
      throw new AppError(400, error.message || 'Error creating user');
    }
  },
};

module.exports = userRepository;
