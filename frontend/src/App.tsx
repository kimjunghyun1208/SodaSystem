import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomeView from './home/HomeView';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/business" element={<div className="flex justify-center items-center h-[60vh] text-4xl font-bold opacity-30">Business View (Ready to Implement)</div>} />
          <Route path="/technology" element={<div className="flex justify-center items-center h-[60vh] text-4xl font-bold opacity-30">Technology View (GIS/IoT Modules)</div>} />
          <Route path="/recruit" element={<div className="flex justify-center items-center h-[60vh] text-4xl font-bold opacity-30">Recruit View</div>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
