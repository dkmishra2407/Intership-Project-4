// import React, { useEffect } from 'react';


// const Home = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const handleDownload = () => {
//     // Adjust the file path to the correct PDF file
//     const pdfPath = '/assets/Wall_Tiles_Catalogue/Stone_Cladding.pdf';
//     window.open(pdfPath, '_blank');
//   };

//   return (
//     <div className='bg-neutral-950'>
//       {/* Hero Section */}
//       <section className="relative h-[600px]" data-aos="fade-up">
//         <img
//           src={image2}
//           alt="Modern bathroom with luxury tiles"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
//           <div className="container mx-auto px-4">
//             <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
//               Transform Your Space<br />With Premium Tiles
//             </h1>
//             <p className="text-white text-xl mb-8">
//               Discover our extensive collection of high-quality tiles
//             </p>
//             <Link
//               to="/products"
//               className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-flex items-center gap-2"
//             >
//               Explore Products <ArrowRight size={20} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
// <section className="py-16" data-aos="fade-right" id='AboutUs'>
//   <div className="container mx-auto px-4">
//     <div className="max-w-3xl mx-auto text-center mb-12">
//       <h2 className="text-3xl font-bold mb-6">About Sadhguru Tiles</h2>
//       <p className="text-gray-600 mb-8">
//         Sadhguru Tiles is the place where you can find the sharp vision of marketing, global network, and powerful backbone of quality. We care about the vision to cater world-class ceramic tiles, delivering superior quality with modern technology and artistic designs.
//       </p>
//       <p className="text-gray-600">
//         Today, our award-winning company is one of the largest retailers of its kind in Pune, Maharashtra, offering a wide range of Wall & Floor Tiles, Bath products, and Modular Kitchens.
//       </p>
//     </div>

//     {/* Vision, Mission, Goal Cards */}
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-aos="fade-left">
//       {[{
//         icon: <Eye className="text-blue-600 w-6 h-6" />, 
//         title: 'Our Vision',
//         description: 'We envision a world where ceramic excellence transforms spaces into timeless realms of innovation, sophistication, and beauty.'
//       }, {
//         icon: <Compass className="text-blue-600 w-6 h-6" />, 
//         title: 'Our Mission',
//         description: 'Deliver unparalleled ceramic solutions blending cutting-edge technology, sustainability, and creativity to inspire elevated lifestyles.'
//       }, {
//         icon: <Target className="text-blue-600 w-6 h-6" />, 
//         title: 'Our Goal',
//         description: 'Set new benchmarks in quality, innovation, global impact, and environmental responsibility in the ceramic industry.'
//       }].map((item, index) => (
//         <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
//           <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             {item.icon}
//           </div>
//           <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
//           <p className="text-gray-600">{item.description}</p>
//         </div>
//       ))}
//     </div>

//     {/* Company Values */}
//     <div className="bg-gray-50 p-8 rounded-lg mb-16" data-aos="fade-up">
//       <div className="max-w-3xl mx-auto">
//         <div className="flex items-center justify-center mb-6">
//           <Award className="text-blue-600 w-8 h-8 mr-3" />
//           <h3 className="text-2xl font-bold">Company Values</h3>
//         </div>
//         <p className="text-gray-600 text-center">
//           At Sadhguru Tiles, integrity is a cornerstone of our work ethics. We prioritize our employees and customers, ensuring a high client retention ratio and timely delivery through a wide distribution network.
//         </p>
//       </div>
//     </div>

//     {/* Why Choose Us Section */}
//     <div className="mb-16" data-aos="fade-left">
//       <h3 className="text-2xl font-bold text-center mb-8">Why Choose Us?</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {[
//           {
//             title: "Vast Selection",
//             description: "We offer a wide range of designs and styles to suit every need."
//           },
//           {
//             title: "Quality Assurance",
//             description: "Our tiles are made from premium materials, ensuring durability and longevity."
//           },
//           {
//             title: "Competitive Pricing",
//             description: "As a wholesale distributor, we provide exceptional value without compromising on quality."
//           },
//           {
//             title: "Expert Guidance",
//             description: "Our experienced team is here to assist you in selecting the right tiles for your project."
//           },
//           {
//             title: "Timely Delivery",
//             description: "We ensure that our products reach you on time, every time."
//           }
//         ].map((item, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//             <h4 className="text-lg font-semibold mb-3 text-blue-600">{item.title}</h4>
//             <p className="text-gray-600">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Founder Section */}
//     <div className="bg-gray-50 p-8 rounded-lg" data-aos="fade-up">
//       <div className='flex'>
//       <div className="max-w-3xl mx-auto">
//         <h3 className="text-2xl font-bold text-center mb-6">About the Founder – Prashant Gilbile</h3>
//         <div className="space-y-4 text-gray-600">
//           <p>
//             With over 15 years of experience in the tiles industry, Prashant Gilbile, founder and owner of Sadhguru Tiles, has established himself as a leader in the wholesale tiles market. His deep industry expertise, customer-focused approach, and commitment to quality have been the foundation of the company's success.
//           </p>
//           <p>
//             Prashant started Sadhguru Tiles with a vision to provide premium-quality tiles at competitive prices, meeting the diverse needs of contractors, builders, and designers. Under his leadership, the company has become synonymous with trust, durability, and style, serving as a reliable partner for a wide range of projects.
//           </p>
//           <p>
//             Driven by innovation and excellence, Prashant continues to steer Sadhguru Tiles toward growth, ensuring it remains a go-to destination for exceptional tile solutions.
//           </p>
//         </div>
//       </div>

//       <div>
//       <img
//         src={image9}
//         alt="Prashant Gilbile"
//         className="w-80 h-80 object-fit rounded-lg shadow-lg"
//       />
//       </div>
//     </div>
//       </div>
//   </div>
// </section>

//       {/* Featured Collections */}
//       <section className="py-16 bg-gray-50" data-aos="fade-up">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[{
//               title: 'Modern Living',
//               image: image1,
//               description: 'Contemporary designs for modern spaces'
//             }, {
//               title: 'Classic Elegance',
//               image: image2,
//               description: 'Timeless patterns and textures'
//             }, {
//               title: 'Outdoor Collection',
//               image: image3,
//               description: 'Durable tiles for outdoor spaces'
//             }].map((collection, index) => (
//               <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
//                 <img
//                   src={collection.image}
//                   alt={collection.title}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
//                   <p className="text-gray-600 mb-4">{collection.description}</p>
//                   <Link
//                     to="/products"
//                     className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
//                   >
//                     View Collection <ArrowRight size={20} />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Catalogue Download */}
//       <section className="py-16 bg-blue-600" data-aos="fade-right">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Download Our Latest Catalogue</h2>
//           <p className="text-white text-lg mb-8">
//             Explore our complete collection and find the perfect tiles for your project
//           </p>
//           <button
//             className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 inline-flex items-center gap-2"
//             onClick={handleDownload}
//           >
//             <Download size={20} />
//             Download Catalogue
//           </button>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-16" data-aos="fade-up">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Visit Our Showroom</h2>
//           <div className="aspect-w-16 aspect-h-9">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.762090823624!2d73.9542139!3d18.5897315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c58c27dd166d%3A0x9e719b4fb20393b3!2sSadhguru%20Tiles!5e0!3m2!1sen!2sin!4v1645567970544!5m2!1sen!2sin"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </section>


//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Download, ArrowRight, Target, Eye, Compass, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/Slider/---a-beautifully-designed-hero-banner-showcasing-h (1).jpg';
import image2 from '../../assets/Slider/a-hero-banner-image-featuring-european-style-tile-.jpg';
import image3 from '../../assets/Slider/a-hero-banner-image-showcasing-outdoor-tiles-in-a-.jpg';
import {SwipeCarousel} from '../components/slider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image9 from "../../assets/about us/20240310_115939.jpg"
import { img } from 'framer-motion/client';

const Home = () => {
  const handleDownload = () => {
    const pdfPath = '/assets/Wall_Tiles_Catalogue/Stone_Cladding.pdf';
    window.open(pdfPath, '_blank');
  };

  const handleExplore = (e) => {
    e.preventDefault();
    // Handle navigation programmatically or through your preferred method
    console.log('Exploring products...');
  };

  return (
    <>
    <div className="bg-neutral-950">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <img
          src={image2}
          alt="Modern bathroom with luxury tiles"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Transform Your Space<br />With Premium Tiles
            </h1>
            <p className="text-gray-200 text-xl mb-8">
              Discover our extensive collection of high-quality tiles
            </p>
            <button
              onClick={handleExplore}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 inline-flex items-center gap-2 transition-colors"
            >
              Explore Products <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16" id="AboutUs">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">About Sadhguru Tiles</h2>
            <p className="text-gray-300 mb-8">
              Sadhguru Tiles is the place where you can find the sharp vision of marketing, global network, and powerful backbone of quality. We care about the vision to cater world-class ceramic tiles, delivering superior quality with modern technology and artistic designs.
            </p>
            <p className="text-gray-300">
              Today, our award-winning company is one of the largest retailers of its kind in Pune, Maharashtra, offering a wide range of Wall & Floor Tiles, Bath products, and Modular Kitchens.
            </p>
          </div>

          {/* Vision, Mission, Goal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[{
              icon: <Eye className="text-blue-400 w-6 h-6" />,
              title: 'Our Vision',
              description: 'We envision a world where ceramic excellence transforms spaces into timeless realms of innovation, sophistication, and beauty.'
            }, {
              icon: <Compass className="text-blue-400 w-6 h-6" />,
              title: 'Our Mission',
              description: 'Deliver unparalleled ceramic solutions blending cutting-edge technology, sustainability, and creativity to inspire elevated lifestyles.'
            }, {
              icon: <Target className="text-blue-400 w-6 h-6" />,
              title: 'Our Goal',
              description: 'Set new benchmarks in quality, innovation, global impact, and environmental responsibility in the ceramic industry.'
            }].map((item, index) => (
              <div key={index} className="bg-neutral-900 p-6 rounded-lg shadow-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Company Values */}
          <div className="bg-neutral-900 p-8 rounded-lg mb-16 border border-neutral-800">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Award className="text-blue-400 w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-white">Company Values</h3>
              </div>
              <p className="text-gray-300 text-center">
                At Sadhguru Tiles, integrity is a cornerstone of our work ethics. We prioritize our employees and customers, ensuring a high client retention ratio and timely delivery through a wide distribution network.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Vast Selection",
                  description: "We offer a wide range of designs and styles to suit every need."
                },
                {
                  title: "Quality Assurance",
                  description: "Our tiles are made from premium materials, ensuring durability and longevity."
                },
                {
                  title: "Competitive Pricing",
                  description: "As a wholesale distributor, we provide exceptional value without compromising on quality."
                },
                {
                  title: "Expert Guidance",
                  description: "Our experienced team is here to assist you in selecting the right tiles for your project."
                },
                {
                  title: "Timely Delivery",
                  description: "We ensure that our products reach you on time, every time."
                }
              ].map((item, index) => (
                <div key={index} className="bg-neutral-900 p-6 rounded-lg shadow-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Section */}
          <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800">
            <div className="flex flex-col md:flex-row gap-8 justify-space-evenly">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold text-center mb-6 text-white">About the Founder – Prashant Gilbile</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    With over 15 years of experience in the tiles industry, Prashant Gilbile, founder and owner of Sadhguru Tiles, has established himself as a leader in the wholesale tiles market. His deep industry expertise, customer-focused approach, and commitment to quality have been the foundation of the company's success.
                  </p>
                  <p>
                    Prashant started Sadhguru Tiles with a vision to provide premium-quality tiles at competitive prices, meeting the diverse needs of contractors, builders, and designers. Under his leadership, the company has become synonymous with trust, durability, and style, serving as a reliable partner for a wide range of projects.
                  </p>
                  <p>
                    Driven by innovation and excellence, Prashant continues to steer Sadhguru Tiles toward growth, ensuring it remains a go-to destination for exceptional tile solutions.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={image9}
                  alt="Prashant Gilbile"
                  className="w-80 h-80 object-fit rounded-lg shadow-lg"
                />
              </div>
            </div>
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

      <div>
        <SwipeCarousel />
      </div>
    </>
  );
};

export default Home;