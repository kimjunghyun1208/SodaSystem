import { fetchHomeData } from '../services/homeService.js';

export const getHomeInfo = async (req, res) => {
  try {
    const data = await fetchHomeData();
    res.json({ success: true, ...data });
  } catch (err) {
    res.status(500).json({ success: false, message: '서버 오류 (Skeleton)' });
  }
};
