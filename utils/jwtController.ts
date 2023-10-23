import { jwtType } from "@/types/jwtType";

const jwt = require('jsonwebtoken');

// const secret = process.env.JWT_SECRET;
const secret = "secret";
const expiresIn = '5h';

export const generateToken = (data: jwtType) => {
  const token = jwt.sign(data, secret, { expiresIn });
  return token;
};

export function validateToken(token: string) {
  const decoded = jwt.verify(token, secret);
  return !!decoded;
}
