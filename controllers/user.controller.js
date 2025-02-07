const userService = require('../services/user.service');
const createUserSchema = require('../validations/CreateUser.validation');
const AppError = require('../utils/AppError');

const userController = {
  createUser: async (req, res, next) => {
    try {
      const { error } = createUserSchema.validate(req.body);
      if (error) {
        throw new AppError(400, error.details[0].message);
      }

      const newUser = await userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
