import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRE = process.env.JWT_EXPIRE || '7d';

export const generateToken = (userId) => {
    return jwt.sign({ userId }, JWT_SECRET, {
      expiresIn: JWT_EXPIRE,
    });
};

export const verifyToken = (token) => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return null;
    }
};