import express from 'express';
import 'dotenv/config'
import { requestLogger } from './middleware/logger.js';

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// use the logger middleware
app.use(requestLogger);

// Import our routes and mount them
import { router as twilioRoutes } from './routes/twilio.js';
import { router as makeRoutes } from './routes/n8n.js';
import { router as calRoutes } from './routes/cal.js';
import { router as ragRoutes } from './routes/rag.js';

app.use('/twilio/', twilioRoutes);
app.use('/make/', makeRoutes);
app.use('/cal/', calRoutes);
app.use('/rag/', ragRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});