import React from "react";
import image9 from "../../assets/about us/20240310_115939.jpg";
import { Download, ArrowRight, Target, Eye, Compass, Award } from "lucide-react";
import { Link } from "react-router-dom";
import {SwipeCarousel} from '../components/slider';

// Define a type for the card data to ensure type safety
type CardData = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const AboutUs: React.FC = () => {
  // Data for vision, mission, and goal cards
  const visionMissionGoalCards: CardData[] = [
    {
      icon: <Eye className="text-blue-400 w-6 h-6" />,
      title: "Our Vision",
      description:
        "We envision a world where ceramic excellence transforms spaces into timeless realms of innovation, sophistication, and beauty.",
    },
    {
      icon: <Compass className="text-blue-400 w-6 h-6" />,
      title: "Our Mission",
      description:
        "Deliver unparalleled ceramic solutions blending cutting-edge technology, sustainability, and creativity to inspire elevated lifestyles.",
    },
    {
      icon: <Target className="text-blue-400 w-6 h-6" />,
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
    <>
      <div className="bg-neutral-950">
        {/* About Us Section */}
        <section className="py-16" id="AboutUs">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">About Sadhguru Tiles</h2>
              <p className="text-gray-300 mb-8">
                Sadhguru Tiles is the place where you can find the sharp vision of marketing, global
                network, and powerful backbone of quality. We care about the vision to cater
                world-class ceramic tiles, delivering superior quality with modern technology and
                artistic designs.
              </p>
              <p className="text-gray-300">
                Today, our award-winning company is one of the largest retailers of its kind in
                Pune, Maharashtra, offering a wide range of Wall & Floor Tiles, Bath products, and
                Modular Kitchens.
              </p>
            </div>

            {/* Vision, Mission, Goal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {visionMissionGoalCards.map((item, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 p-6 rounded-lg shadow-xl border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
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
                  At Sadhguru Tiles, integrity is a cornerstone of our work ethics. We prioritize
                  our employees and customers, ensuring a high client retention ratio and timely
                  delivery through a wide distribution network.
                </p>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-white">Why Choose Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-neutral-900 p-6 rounded-lg shadow-xl border border-neutral-800 hover:border-neutral-700 transition-colors"
                  >
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
                  <h3 className="text-2xl font-bold text-center mb-6 text-white">
                    About the Founder – Prashant Gilbile
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      With over 15 years of experience in the tiles industry, Prashant Gilbile,
                      founder and owner of Sadhguru Tiles, has established himself as a leader in
                      the wholesale tiles market. His deep industry expertise, customer-focused
                      approach, and commitment to quality have been the foundation of the company's
                      success.
                    </p>
                    <p>
                      Prashant started Sadhguru Tiles with a vision to provide premium-quality tiles
                      at competitive prices, meeting the diverse needs of contractors, builders, and
                      designers. Under his leadership, the company has become synonymous with trust,
                      durability, and style, serving as a reliable partner for a wide range of
                      projects.
                    </p>
                    <p>
                      Driven by innovation and excellence, Prashant continues to steer Sadhguru
                      Tiles toward growth, ensuring it remains a go-to destination for exceptional
                      tile solutions.
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


      </div>

      <div>
              <SwipeCarousel />
        </div>
    </>
  );
};

export default AboutUs;
