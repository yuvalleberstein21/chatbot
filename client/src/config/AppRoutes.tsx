import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/main/Header';
import HomePage from '../pages/home/HomePage';

const AppRoutes = () => {
  return (
    <main>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
};

export default AppRoutes;
