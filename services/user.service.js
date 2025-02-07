const userRepository = require('../repositories/user.repository');
const AppError = require('../utils/AppError');

const userService = {
  createUser: async (userData) => {
    try {
      return await userRepository.createUser(userData);
    } catch (error) {
      throw new AppError(500, 'Error creating user');
    }
  },
};

module.exports = userService;
