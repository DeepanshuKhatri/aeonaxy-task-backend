const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: { ssl: { require: true } },
});
const User = require("../models/user")(sequelize, DataTypes);


const checkUserEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: {email} });
    if (user) {
      return res
        .status(409)
        .json({ message: "Account exists on this email. Please login!"});
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const checkUsername = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ where:{username} });
    if (user) {
      return res
        .status(409)
        .json({ message: "Username has already been taken" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {checkUserEmail, checkUsername}