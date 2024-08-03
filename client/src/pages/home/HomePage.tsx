import BannerProducts from '../../components/BannerProducts';
import VideoBanner from '../../components/VideoBanner';
import ProductsPage from '../products/ProductsPage';
import AboutPage from './AboutPage';
import BannerPage from './BannerPage';

const HomePage = () => {
  return (
    <>
      <section>
        <BannerPage />
      </section>
      <section>
        <AboutPage />
      </section>
      <section>
        <ProductsPage />
      </section>
      <section>
        <BannerProducts />
      </section>
      <section>
        <VideoBanner />
      </section>
    </>
  );
};

export default HomePage;
