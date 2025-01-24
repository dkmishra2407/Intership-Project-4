import React from 'react';
import { Download, ArrowRight, Target, Eye, Compass, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/Slider/---a-beautifully-designed-hero-banner-showcasing-h (1).jpg';
import image2 from '../../assets/Slider/a-hero-banner-image-featuring-european-style-tile-.jpg';
import image3 from '../../assets/Slider/a-hero-banner-image-showcasing-outdoor-tiles-in-a-.jpg';
import logo from '../../assets/about us/LOGO.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SwipeCarousel1 } from '../components/mainslider';

const Home = () => {
  const handleDownload = () => {
    const pdfPath = '/assets/Wall_Tiles_Catalogue/Stone_Cladding.pdf';
    window.open(pdfPath, '_blank');
  };

  const handleExplore = () => {
    console.log('Exploring products...');
  };

  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Hero Section */}
      <section className='w-full'>
        <SwipeCarousel1/>
      </section>

      <section className="bg-white py-16 flex ml-10 gap-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 ml-10">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-blue-900 text-5xl md:text-7xl font-extrabold mb-4 font-serif">
              Transform Your Space<br />With Premium Tiles
            </h1>
            <p className="text-gray-700 text-2xl mb-8 font-light">
              Discover our extensive collection of high-quality tiles.
            </p>
            <Link to="/products">
              <button
                onClick={handleExplore}
                className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 inline-flex items-center gap-3 transition-colors text-lg font-semibold"
              >
                Explore Products <ArrowRight size={24} />
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900 font-serif">
            Featured Collections
          </h2>
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
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                <img
                  src={collection.img}
                  alt={collection.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-800 font-serif">
                    {collection.title}
                  </h3>
                  <p className="text-gray-700 mb-4 font-light">
                    {collection.description}
                  </p>
                  <button
                    onClick={handleExplore}
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 transition-colors"
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
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 font-serif">
            Download Our Latest Catalogue
          </h2>
          <p className="text-gray-700 text-xl mb-8 font-light">
            Explore our complete collection and find the perfect tiles for your project
          </p>
          <button
            className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 inline-flex items-center gap-3 transition-colors text-lg font-semibold"
            onClick={handleDownload}
          >
            <Download size={24} />
            Download Catalogue
          </button>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900 font-serif">
            Visit Our Showroom
          </h2>
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
  );
};

export default Home;