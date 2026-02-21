import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/database.js';

import authRoutes from './src/routes/authRoutes.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);

//cors configuration
const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
}

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//socket.io setup
const io = new Server(httpServer, {
    cors: corsOptions,
});

connectDB();



//routes
app.get('/health', (req, res) => {
    res.json({
      status: 'ok',
      message: 'Syncode backend is running',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
});

// Test route
app.get('/api/test', (req, res) => {
    res.json({
      message: 'Backend API is working!',
      version: '1.0.0',
    });
});

//api routes
app.use('/api/auth', authRoutes);

//socket.io connection
io.on('connection', (socket) => {
    console.log('✅ User connected:', socket.id);
  
    socket.on('disconnect', () => {
      console.log('❌ User disconnected:', socket.id);
    });
  
    // Test event
    socket.on('ping', () => {
      socket.emit('pong', { message: 'Server is alive!' });
    });
});

//error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong',
    });
});

//404 handler
app.use((req, res) => {
    res.status(404).json({
      error: 'Not found',
      message: `Route ${req.method} ${req.path} not found`,
    });
});

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
    console.log('🚀 Syncode Backend Server');
    console.log(`📍 Server running on http://localhost:${PORT}`);
    console.log(`🏥 Health check: http://localhost:${PORT}/health`);
    console.log(`🧪 Test endpoint: http://localhost:${PORT}/api/test`);
    console.log(`🔌 Socket.IO ready for connections`);
});