import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/userRoutes.js';
import { initializeDB } from './db.js';

dotenv.config();
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(express.static(path.join(__dirname, 'frontend')));

const PORT = process.env.PORT || 5000;

initializeDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
