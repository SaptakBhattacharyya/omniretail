import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use((req, res, next) => {
  console.log(`[DEBUG] ${req.method} ${req.url}`);
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic health check route
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'SPY_HEALTH_CHECK_OK' });
});

// Routes
app.use('/api/v1/users', userRoutes);

export default app;
