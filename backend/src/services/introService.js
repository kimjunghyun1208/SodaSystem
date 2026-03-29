/**
 * [실무 핵심 서비스] DB에서 주소(URL)만 가져와서 S3 경로를 매핑하는 로직의 뼈대
 */
export const fetchIntroData = async () => {
    // 실제라면 DB 조회가 일어나며, S3 주소가 담긴 객체를 반환하게 됩니다.
    const mockDbResult = {
        title: "(주)소다시스템 회사 소개",
        desc: "지속 가능한 미래를 선도하는 수자원 정보화 전문 기업",
        
        // [S3 매핑 비법] 실제 파일이 아닌 저장된 주소(Cloud URL)만 반환
        assets: {
            pdfIntro: "https://s3.ap-northeast-2.amazonaws.com/sodasystem-bucket/docs/company-intro-2026.pdf",
            heroImage: "https://s3.ap-northeast-2.amazonaws.com/sodasystem-bucket/images/main-hero.webp",
            performanceReport: "https://s3.ap-northeast-2.amazonaws.com/sodasystem-bucket/docs/performance-2025.hwp"
        }
    };

    return mockDbResult;
};
