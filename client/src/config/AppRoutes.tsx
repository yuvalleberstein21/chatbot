import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/main/Header';

const AppRoutes = () => {
  return (
    <main>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<h1>HELLO WORLD</h1>} />
          </Routes>
        </div>
      </Router>
    </main>
  );
};

export default AppRoutes;
