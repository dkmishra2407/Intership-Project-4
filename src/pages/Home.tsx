import React from 'react';
import { Download, ArrowRight, Target, Eye, Compass, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/Slider/---a-beautifully-designed-hero-banner-showcasing-h (1).jpg';
import image2 from '../../assets/Slider/a-hero-banner-image-featuring-european-style-tile-.jpg';
import image3 from '../../assets/Slider/a-hero-banner-image-showcasing-outdoor-tiles-in-a-.jpg';
import logo from '../../assets/about us/LOGO.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import image9 from "../../assets/about us/20240310_115939.jpg"
import { img, link } from 'framer-motion/client';
import { SwipeCarousel1 } from '../components/mainslider';

const Home = () => {
  const handleDownload = () => {
    const pdfPath = '/assets/Wall_Tiles_Catalogue/Stone_Cladding.pdf';
    window.open(pdfPath, '_blank');
  };

  const handleExplore = () => {
    <Link to="/products" />;
    console.log('Exploring products...');
  };

  return (
    <>
    <div className="bg-neutral-950">
      {/* Hero Section */}

      <section className='w-full'>
        <SwipeCarousel1/>
      </section>

      <section className="bg-neutral-950 py-16 flex ml-10 gap-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 ml-10">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Transform Your Space<br />With Premium Tiles
          </h1>
          <p className="text-gray-200 text-xl mb-8">
            Discover our extensive collection of high-quality tiles.
          </p>
          <Link to="/products" >
          <button
            onClick={handleExplore}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 inline-flex items-center gap-2 transition-colors"
          >
            Explore Products <ArrowRight size={20} />
          </button>
          </Link>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <img src={logo} alt="Company Logo" className="w-full max-w-md object-contain" />
        </div>
      </div>
    </section>

      {/* Featured Collections */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: 'Modern Living',
              description: 'Contemporary designs for modern spaces',
              img: image1
            }, {
              title: 'Classic Elegance',
              description: 'Timeless patterns and textures',
              img: image2
            }, {
              title: 'Outdoor Collection',
              description: 'Durable tiles for outdoor spaces',
              img: image3
            }].map((collection, index) => (
              <div key={index} className="bg-neutral-800 rounded-lg overflow-hidden shadow-xl border border-neutral-700 hover:border-neutral-600 transition-colors">
                <img
                  src={collection.img}
                  alt={collection.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{collection.title}</h3>
                  <p className="text-gray-300 mb-4">{collection.description}</p>
                  <button
                    onClick={handleExplore}
                    className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 transition-colors"
                  >
                    View Collection <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Download */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Download Our Latest Catalogue</h2>
          <p className="text-gray-200 text-lg mb-8">
            Explore our complete collection and find the perfect tiles for your project
          </p>
          <button
            className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-gray-100 inline-flex items-center gap-2 transition-colors"
            onClick={handleDownload}
          >
            <Download size={20} />
            Download Catalogue
          </button>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Visit Our Showroom</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.762090823624!2d73.9542139!3d18.5897315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c58c27dd166d%3A0x9e719b4fb20393b3!2sSadhguru%20Tiles!5e0!3m2!1sen!2sin!4v1645567970544!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default Home;