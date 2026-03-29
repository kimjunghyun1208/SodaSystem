import { motion } from 'framer-motion';
import { ArrowRight, Waves, Cpu, BarChart3, Globe } from 'lucide-react';
import React from 'react';

const Card: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="glass p-8 rounded-3xl border-slate-800/50 hover:border-primary-500/30 transition-all duration-300"
  >
    <div className="w-12 h-12 bg-primary-500/20 rounded-2xl flex items-center justify-center text-primary-400 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed mb-6">
      {desc}
    </p>
    <button className="text-primary-400 font-semibold group flex items-center gap-2">
      자세히 보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  </motion.div>
);

const HomeView = () => {
  return (
    <div className="container mx-auto px-6">
      {/* Hero Section */}
      <section className="py-24 md:py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block py-1 px-4 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8"
        >
          Sustainable Technology for Future
        </motion.div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
          Designing the Future of <br />
          <span className="text-gradient">Water Resources</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          지속 가능한 미래를 위해 우리는 스마트한 수자원 관리와 <br /> 
          혁신적인 환경 정보 기술을 기반으로 세상을 설계합니다.
        </p>
        
        <div className="flex flex-col md:row items-center gap-6">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-2xl shadow-primary-500/30 group flex items-center gap-2">
            사업 소개 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="glass px-10 py-5 rounded-full text-lg font-bold hover:bg-white/5 transition-all">
            기술 정보
          </button>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="grid md:grid-cols-4 gap-6 py-12">
        <Card 
          icon={<Waves className="w-8 h-8" />}
          title="수자원 관리"
          desc="인공지능 기반 분석으로 효율적이고 투명한 수자원 관리를 실현합니다."
        />
        <Card 
          icon={<Cpu className="w-8 h-8" />}
          title="IoT 센싱"
          desc="실시간 데이터 수집 및 고성능 센서를 통해 미래 정보를 분석합니다."
        />
        <Card 
          icon={<Globe className="w-8 h-8" />}
          title="GIS 시각화"
          desc="전문 GIS 엔진을 활용하여 직관적인 공간 정보 통합 시스템을 제공합니다."
        />
        <Card 
          icon={<BarChart3 className="w-8 h-8" />}
          title="통계 데이터"
          desc="빅데이터 통계 기법을 통한 정교한 예측 및 통합 관제 가능성을 제시합니다."
        />
      </section>

      {/* Experience Section */}
      <section className="mt-32 relative group overflow-hidden rounded-[3rem] aspect-video md:aspect-[21/9] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 to-slate-900 -z-10 group-hover:scale-105 transition-transform duration-700" />
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">스마트 가치를 더하는 정보 기술 연구소</h2>
          <p className="text-slate-300 text-lg mb-8">(주)소다시스템은 ICT 융합 시대를 열어가는 기술의 중심에 있습니다.</p>
          <button className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:shadow-xl hover:bg-slate-100 transition-all">
            더 보기
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
