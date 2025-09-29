const User = require("../models/userModel");

const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).send({ message: "Password does not match." });
    }

    const isExist = await User.findOne({ email });

    if (isExist) {
      return res.status(400).send({ message: "User already exist." });
    }

    const newUser = await new User({
      name,
      email,
      password,
    });

    newUser.save().then(() =>
      res.status(201).json({
        message: "User registered successfully",
        user: { name, email, password },
      })
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signup };
