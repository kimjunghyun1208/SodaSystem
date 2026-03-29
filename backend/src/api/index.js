import express from 'express';
import { getHomeInfo } from '../controllers/homeController.js';
import { getIntroInfo } from '../controllers/introController.js';

const router = express.Router();

// [GET] /api/home - 메인 정보 조회 API 뼈대
router.get('/home', getHomeInfo);

// [GET] /api/intro - 회사 소개 및 S3 매핑 데이터 조회
router.get('/intro', getIntroInfo);

export default router;
