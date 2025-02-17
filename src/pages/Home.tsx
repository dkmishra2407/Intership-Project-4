import React, { useEffect } from 'react';
import { Download, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../../assets/Slider/---a-beautifully-designed-hero-banner-showcasing-h (1).jpg';
import image2 from '../../assets/Slider/a-hero-banner-image-featuring-european-style-tile-.jpg';
import image3 from '../../assets/Slider/a-hero-banner-image-showcasing-outdoor-tiles-in-a-.jpg';
import logo from '../../assets/about us/LOGO.jpg';
import { SwipeCarousel1 } from '../components/mainslider';
import p1 from '../../assets/Collection/1.jpg';
import p2 from '../../assets/Collection/2.jpg';
import p3 from '../../assets/Collection/3.jpg';
import p4 from '../../assets/Collection/abcd.jpg';
import p10 from '../../assets/Collection/4.jpg';
import p9 from '../../assets/Collection/5.jpg';
import p8 from '../../assets/Collection/6.jpg';
import p7 from '../../assets/Collection/7.jpg';
import p5 from '../../assets/Collection/8.jpg';
import p6 from '../../assets/Collection/9.jpg';
import p11 from '../../assets/Collection/10.jpg';
import p12 from '../../assets/Collection/11.jpg';
import p13 from '../../assets/Collection/12.jpg';
// import p14 from '../../assets/Collection/13.jpg';
import p15 from '../../assets/Collection/14.jpg';
import p16 from '../../assets/Collection/15.jpg';
import p17 from '../../assets/Collection/16.jpg';
import p18 from '../../assets/Collection/17.jpg';
import p19 from '../../assets/Collection/18.jpg';
import p20 from '../../assets/Collection/19.jpg';
import p21 from '../../assets/Collection/20.jpg';
import { Link, useNavigate } from 'react-router-dom';
// import  VerticalAccordion1  from '../components/Tiles_brands';
import  VerticalAccordion  from '../components/Tiles_supplier';
const images = [p1, p2, p3, p4,p18,p19];
const images1 = [p20,p9, p8, p7,p5,p6,p11,p12,p13,p15,p17,p21];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with desired settings
  }, []);

  
  const navigate = useNavigate();

  const handleDownload = () => {
    navigate('/products')
  };

  const handleExplore1 = () => {
    // Add any additional logic you need before navigation
    navigate('/products');
  };

  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Hero Section */}
      <section className="w-full" data-aos="fade-in">
        <SwipeCarousel1 />
      </section>

      {/* Transform Your Space Section */}
      <section className="bg-white py-16 flex ml-10 gap-12" data-aos="fade-up">
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
                onClick={handleExplore1}
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
      <section className="py-16 bg-gray-100" data-aos="zoom-in">
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
                  data-aos="fade-up"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-800 font-serif">
                    {collection.title}
                  </h3>
                  <p className="text-gray-700 mb-4 font-light">
                    {collection.description}
                  </p>
                  <button
                    onClick={handleExplore1}
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
      <section className="py-16 bg-blue-50" data-aos="fade-up">
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

      <section className='py-16 bg-white' data-aos="fade-left">
  <h2 className="text-4xl font-extrabold mb-6 text-blue-800 font-serif text-center">
    Authorised Tiles Suppliers
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
    {images1.map((img, index) => (
      <div key={index} className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center">
        <img 
          src={img} 
          alt={`Client ${index + 1}`} 
          className="w-full h-48 object-contain rounded-md" 
        />
      </div>
    ))}
  </div>
</section>

<section className='py-16 bg-white' data-aos="fade-right">
  <h2 className="text-4xl font-extrabold mb-6 text-blue-800 font-serif text-center">
    Authorised Bathware Brands 
  </h2>
  <div className="px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {images.map((img, index) => (
        <div key={index} className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center">
          <img 
            src={img} 
            alt={`Client ${index + 1}`} 
            className="w-full h-48 object-contain rounded-md"
          />
        </div>
      ))}
    </div>
  </div>
</section>
      
      {/* Map Section */}
      <section className="py-16 bg-white" data-aos="fade-in">
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
