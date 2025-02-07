const createUserSchema = require('../validations/CreateUser.validation');

const userController = {
  createUser: async (req, res, next) => {
    try {
      // Validate the request body
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
