const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
  if (req.path === "/register" || req.path === "/login") {
    next();
  } else {
    const token = req.cookies.token;
    jwt.verify(token, "mysecret", function (err, decoded) {
      if (err) {
        res.status(401).send({ message: "Unauthorized" });
      }
      req.user = { email: decoded.data };
      next();
    });
  }
};

module.exports = authorize;
