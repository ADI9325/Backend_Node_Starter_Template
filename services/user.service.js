const userRepository = require('../repositories/user.repository');
const AppError = require('../utils/AppError');

const userService = {
  createUser: async (userData) => {
    try {
      return await userRepository.createUser(userData);
    } catch (error) {
      console.error('Error creating user:', error.message);

      if (error.name === 'ValidationError') {
        throw new AppError(400, error.message);
      }
      if (error.code === 11000) {
        throw new AppError(409, 'Email or username already exists');
      }
      throw error;
    }
  },
};

module.exports = userService;
