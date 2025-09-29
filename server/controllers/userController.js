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
    res.status(500).send({ message: "Server error" });
    console.log(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    const isMatched = await bcrypt.compareSync(password, user.password);

    if (!user || !isMatched) {
      res.status(404).send({ message: "Invalied credentials." });
    }

    generateJwt(user._id, res);

    res.status(201).json({
      message: "Logged in successfully!",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server error" });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Logged out" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server error" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    console.log(users);

    res.status(201).send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server error" });
  }
};

module.exports = { signup, login, logout, getUsers };
