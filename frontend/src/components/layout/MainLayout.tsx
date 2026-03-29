import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-primary-500/30">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="relative pt-24"
        >
          {/* Subtle background glow effects */}
          <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-900/10 blur-[120px] rounded-full -z-10" />
          <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[120px] rounded-full -z-10" />
          
          {children}
        </motion.main>
      </AnimatePresence>
      <footer className="py-12 px-6 border-t border-slate-800/50 mt-20">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">SODASYSTEM</h2>
            <p className="text-slate-400 max-w-sm">
              지속 가능한 수자원 관리와 환경 정보 기술의 미래를 선도하는 (주)소다시스템입니다.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/business" className="hover:text-primary-400 transition-colors">Business Areas</Link></li>
              <li><Link to="/technology" className="hover:text-primary-400 transition-colors">GIS & IoT</Link></li>
              <li><Link to="/recruit" className="hover:text-primary-400 transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>서울특별시 금천구 가산디지털1로...</li>
              <li>info@sodasys.com</li>
              <li>02-000-0000</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-12 pt-8 border-t border-slate-800/30 text-center text-slate-500 text-sm">
          © 2026 SODASYSTEM Co., Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
