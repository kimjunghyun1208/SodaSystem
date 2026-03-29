import app from './src/app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`[SodaSystem] Backend Server Running...`);
  console.log(`PORT: http://localhost:${PORT}`);
  console.log(`HEALTH CHECK: http://localhost:${PORT}/health`);
  console.log(`========================================`);
});
