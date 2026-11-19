import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Categories from './components/Categories';
import About from './components/About';
import CallToAction from './components/CallToAction';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import AddProduct from './pages/AddProduct';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Products />
      <Categories />
      <About />
      <CallToAction />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/admin/add-product" element={<AddProduct />} />
    </Routes>
  );
}

export default App;