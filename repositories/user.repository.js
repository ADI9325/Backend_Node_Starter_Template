const User = require('../models/user.model');

const userRepository = {
  createUser: async (userData) => {
    try {
      const user = new User(userData);
      return await user.save();
    } catch (error) {
      throw error;
    }
  },
};

module.exports = userRepository;
