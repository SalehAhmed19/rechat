const generateJwt = require("../Auth/jwt");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    const salt = bcrypt.genSaltSync(process.env.SALT);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const isMatched = bcrypt.compareSync(confirmPassword, hashedPassword);
    console.log(isMatched);

    if (!isMatched) {
      return res.status(400).send({ message: "Password does not match." });
    }

    const isExist = await User.findOne({ email });

    if (isExist) {
      return res.status(400).send({ message: "User already exist." });
    }

    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    if (newUser) {
      generateJwt(newUser._id, res);
      res.status(201).json({
        message: "User registered successfully",
        newUser,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signup };
