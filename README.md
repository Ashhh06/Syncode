# Syncode - Real-Time Collaborative Code Editor

A professional SaaS application for real-time collaborative code editing with features like live cursor tracking, chat, code execution, and version history.

## 🚀 Features

- **Real-time Collaboration** - Multiple users can edit code simultaneously
- **Live Cursor Tracking** - See where other users are editing
- **Multi-language Support** - Support for JavaScript, Python, Java, C++, and more
- **Code Execution** - Run code securely in isolated Docker containers
- **Chat System** - Built-in chat for team communication
- **Version History** - Track and restore previous versions
- **User Authentication** - Secure JWT-based authentication with password reset

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Zustand (State Management)
- Socket.IO Client
- Monaco Editor

### Backend
- Node.js
- Express.js
- Socket.IO
- MongoDB
- JWT Authentication
- Docker (for code execution)

## 📁 Project Structure

Syncode/
├── syncode_frontend/ # React frontend application
├── syncode_backend/ # Node.js backend API
└── Documents/ # Design system documentation



## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Git

### Backend Setup

cd syncode_backend
npm install
cp .env.example .env  # Create .env file and add your config
npm run dev### Frontend Setup

cd syncode_frontend
npm install
cp .env.example .env  # Create .env file
npm run dev### Environment Variables

#### Backend (.env)nv
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/syncode
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d#### Frontend (.env)
VITE_API_URL=http://localhost:5000/api## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/forgotpassword` - Request password reset
- `PUT /api/auth/resetpassword/:token` - Reset password
- `PUT /api/auth/updatepassword` - Update password

## 🧪 Testing

# Backend
cd syncode_backend
npm test

# Frontend
cd syncode_frontend
npm test## 📄 License

MIT

## 👤 Author

Akshad

## 🙏 Acknowledgments

- Monaco Editor for the code editor
- Socket.IO for real-time communication
- Tailwind CSS for styling
