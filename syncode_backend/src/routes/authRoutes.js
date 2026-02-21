import express from 'express';
import { 
    register, 
    login, 
    getMe, 
    forgotPassword, 
    resetPassword, 
    updatePassword 
  } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);
router.put('/updatepassword', protect, updatePassword);

export default router;
