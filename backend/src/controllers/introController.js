import { fetchIntroData } from '../services/introService.js';

/**
 * [GET] /api/intro - 회사 소개 및 파일 링크 조회(S3 매핑 예시)
 */
export const getIntroInfo = async (req, res) => {
    try {
        const introData = await fetchIntroData();
        res.status(200).json({
            success: true,
            data: introData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "소개 데이터 조회 중 오류 발생"
        });
    }
};
