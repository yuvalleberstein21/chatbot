import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/main/Header';
import HomePage from '../pages/home/HomePage';
import Footer from '../components/main/Footer';
import SingleProduct from '../pages/products/SingleProduct';

const AppRoutes = () => {
  return (
    <main>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </main>
  );
};

export default AppRoutes;
