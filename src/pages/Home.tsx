import React from 'react';
import { Download, ArrowRight, Target, Eye, Compass, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
// import pdf1 from "../../assets/Wall Tiles Catalogue/Stone Cladding.pdf"
import image1 from '../../assets/Slider/---a-beautifully-designed-hero-banner-showcasing-h (1).jpg'
import image2 from '../../assets/Slider/a-hero-banner-image-featuring-european-style-tile-.jpg'
import image3 from '../../assets/Slider/a-hero-banner-image-showcasing-outdoor-tiles-in-a-.jpg'

const Home = () => {
  const handleDownload = () => {
    window.open(pdf1, '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80"
          alt="Modern bathroom with luxury tiles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Transform Your Space<br />With Premium Tiles
            </h1>
            <p className="text-white text-xl mb-8">
              Discover our extensive collection of high-quality tiles
            </p>
            <Link
              to="/products"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-flex items-center gap-2"
            >
              Explore Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">About Sadhguru Tiles</h2>
            <p className="text-gray-600 mb-8">
              Sadhguru tiles is the place where you can find the sharp vision of marketing, global network and powerful backbone of quality. The company cares the vision to cater world class ceramic tiles. We believe in delivering superior quality of ceramic tiles with a sharp vision on modern technology along with modernized art work.
            </p>
            <p className="text-gray-600">
              Today, our award winning company is one of the largest retailers of its kind in Pune, Maharashtra, and we offer a wide range of Wall & Floor Tiles, Bath products and Modular Kitchens.
            </p>
          </div>

          {/* Vision, Mission, Goal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                We envision a world where ceramic excellence transcends, transforming spaces into timeless realms of innovation, sophistication, and beauty.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to consistently deliver unparalleled ceramic solutions, blending cutting-edge technology, sustainability, and creativity to inspire elevated lifestyles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Goal</h3>
              <p className="text-gray-600">
                We aim to lead the ceramic industry by setting new benchmarks in quality, innovation, global impact, and environmental responsibility.
              </p>
            </div>
          </div>

          {/* Company Values */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Award className="text-blue-600 w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Company Values</h3>
              </div>
              <p className="text-gray-600 text-center">
                When it comes to work ethics we take integrity as a prime factor in deciding our values. We take pride in ourselves by calling our organization "Employee First". It is said that "Customer is King", our Client retention ratio signifies the saying. Our wider distribution network ensures timely delivery of all products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Living",
                image: image1,
                description: "Contemporary designs for modern spaces"
              },
              {
                title: "Classic Elegance",
                image: image2,
                description: "Timeless patterns and textures"
              },
              {
                title: "Outdoor Collection",
                image: image3,
                description: "Durable tiles for outdoor spaces"
              }
            ].map((collection, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  <Link
                    to="/products"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
                  >
                    View Collection <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Download */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Download Our Latest Catalogue
          </h2>
          <p className="text-white text-lg mb-8">
            Explore our complete collection and find the perfect tiles for your project
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 inline-flex items-center gap-2" onClick={handleDownload}>
            <Download size={20} />
            Download Catalogue
          </button>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Our Showroom</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645567970544!5m2!1sen!2s"
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