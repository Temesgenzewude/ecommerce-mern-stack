import jwt from "jsonwebtoken"


export const requireLogin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];

    const user = jwt.verify(token, process.env.JWT_SECRET);

    req.user = user;
    next();
  } else {
    return res.status(400).json({ message: "Authorization required" });
  }
};

export const userMiddleware = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(400).json({ message: "User Access Denied" });
  }
  next();
};

export const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(400).json({ message: "Admin Access Denied" });
  }
  next();
};
