import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRouter from './api/index.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// API 엔드포인트 연결
app.use('/api', apiRouter);

// 기본 상태 확인 경로
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'SodaSystem API' });
});

export default app;
