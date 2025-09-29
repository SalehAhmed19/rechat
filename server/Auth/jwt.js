const jwt = require("jsonwebtoken");

const generateJwt = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true, // xss
    secure: true,
    sameSite: "strict", // csrf
  });
};

module.exports = generateJwt;
