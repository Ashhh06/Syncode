import { verifyToken } from '../utils/jwt.js';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  try {
    let token;

    //get token from header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        error: 'Not authorized',
        message: 'Please login to access this resource',
      });
    }

    //verify token
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({
        error: 'Not authorized',
        message: 'Invalid or expired token',
      });
    }

    //get user from token
    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      return res.status(401).json({
        error: 'Not authorized',
        message: 'User no longer exists',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      error: 'Not authorized',
      message: error.message,
    });
  }
};