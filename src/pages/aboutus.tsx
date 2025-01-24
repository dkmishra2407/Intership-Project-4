import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Download, ArrowRight, Target, Eye, Compass, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { SwipeCarousel } from "../components/slider";
import image9 from "../../assets/about us/about_founder.jpg";
import HoverDevCards from '../components/whytochoose';

// Define a type for the card data to ensure type safety
type CardData = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const AboutUs: React.FC = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  // Data for vision, mission, and goal cards
  const visionMissionGoalCards: CardData[] = [
    {
      icon: <Eye className="text-blue-600 w-8 h-8" />,
      title: "Our Vision",
      description:
        "We envision a world where ceramic excellence transforms spaces into timeless realms of innovation, sophistication, and beauty.",
    },
    {
      icon: <Compass className="text-blue-600 w-8 h-8" />,
      title: "Our Mission",
      description:
        "Deliver unparalleled ceramic solutions blending cutting-edge technology, sustainability, and creativity to inspire elevated lifestyles.",
    },
    {
      icon: <Target className="text-blue-600 w-8 h-8" />,
      title: "Our Goal",
      description:
        "Set new benchmarks in quality, innovation, global impact, and environmental responsibility in the ceramic industry.",
    },
  ];

  // Data for "Why Choose Us" section
  const whyChooseUs: { title: string; description: string }[] = [
    {
      title: "Vast Selection",
      description: "We offer a wide range of designs and styles to suit every need.",
    },
    {
      title: "Quality Assurance",
      description: "Our tiles are made from premium materials, ensuring durability and longevity.",
    },
    {
      title: "Competitive Pricing",
      description:
        "As a wholesale distributor, we provide exceptional value without compromising on quality.",
    },
    {
      title: "Expert Guidance",
      description:
        "Our experienced team is here to assist you in selecting the right tiles for your project.",
    },
    {
      title: "Timely Delivery",
      description: "We ensure that our products reach you on time, every time.",
    },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* About Us Section */}
      <section className="py-16 container mx-auto px-4">
        <div
          className="max-w-4xl mx-auto text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-extrabold mb-6 text-blue-800 font-serif">
            About Sadhguru Tiles
          </h2>
          <p className="text-lg mb-8 font-light">
            Sadhguru tiles is the place where you can find the sharp vision of
            marketing, global network and powerful backbone of quality. The
            company cares the vision to cater world class ceramic tiles. We
            believe in delivering superior quality of ceramic tiles with a
            sharp vision on modern technology along with modernized art work.
          </p>
          <p className="text-lg font-light">
            We introduce you to our newest range of Ceramic products that have
            tremendous potential to cater the global market with a competitive
            edge for our wall tiles buyers.
          </p>
          <p className="text-lg font-light">
            Today, our award-winning company is one of the largest retailers of
            its kind in Pune, Maharashtra, offering a wide range of Wall &
            Floor Tiles, Bath products, and Modular Kitchens.
          </p>
        </div>

        {/* Vision, Mission, Goal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {visionMissionGoalCards.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all"
              data-aos="zoom-in"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900 text-center font-serif">
                {item.title}
              </h3>
              <p className="text-gray-700 text-center font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div
          className="bg-gray-50 p-8 rounded-lg mb-16 border border-gray-200"
          data-aos="fade-right"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Award className="text-blue-600 w-10 h-10 mr-3" />
              <h3 className="text-3xl font-bold text-blue-900 font-serif">
                Company Values
              </h3>
            </div>
            <p className="text-lg text-gray-700 text-center font-light">
              At Sadhguru Tiles, integrity is a cornerstone of our work ethics.
              We prioritize our employees and customers, ensuring a high client
              retention ratio and timely delivery through a wide distribution
              network.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16" data-aos="fade-up">
          {/* <h3 className="text-3xl font-bold text-center mb-8 text-blue-900 font-serif">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                data-aos="zoom-in-up"
              >
                <h4 className="text-xl font-bold mb-3 text-blue-600 font-serif">
                  {item.title}
                </h4>
                <p className="text-gray-700 font-light">{item.description}</p>
              </div>
            ))}
          </div> */}

          <HoverDevCards/>
        </div>

        {/* Founder Section */}
        <div
          className="bg-gray-50 w-full p-8 rounded-lg border border-gray-200"
          data-aos="fade-left"
        >
          <div className="flex justify-center w-full mb-8">
            <img
              src={image9}
              alt="Prashant Gilbile"
              className="object-cover rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      <div data-aos="fade-up">
        <SwipeCarousel />
      </div>
    </div>
  );
};

export default AboutUs;
