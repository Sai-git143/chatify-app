import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  // Corrected: Use curly braces for function body and fixed the jwt.sign bracket
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in MS
    httpOnly: true, // Prevents XSS attacks
    sameSite: "strict", // Prevents CSRF attacks
    // Corrected logic: secure should be true in production, false in development
    secure: process.env.NODE_ENV !== "development", 
  });

  return token;
};
