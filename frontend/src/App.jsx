import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './shared/layout/AppLayout';
import HomeEntry from './pages/home/HomeEntry';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomeEntry />} />
          {/* 하위 피처 경로는 팀원들이 각자의 피처를 불러와 연결합니다. */}
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
