import React from "react";
import { IconType } from "react-icons";
import { 
  FiCheckCircle, 
  FiTruck, 
  FiDollarSign, 
  FiHelpCircle, 
  FiLayers 
} from "react-icons/fi";

const HoverDevCards: React.FC = () => {
  // Data for "Why Choose Us" section
  const whyChooseUs: { title: string; subtitle: string; Icon: IconType }[] = [
    {
      title: "Vast Selection",
      subtitle: "We offer a wide range of designs and styles to suit every need.",
      Icon: FiLayers
    },
    {
      title: "Quality Assurance",
      subtitle: "Premium materials ensuring durability and longevity.",
      Icon: FiCheckCircle
    },
    {
      title: "Competitive Pricing",
      subtitle: "Exceptional value without compromising on quality.",
      Icon: FiDollarSign
    },
    {
      title: "Expert Guidance",
      subtitle: "Experienced team to assist you in tile selection.",
      Icon: FiHelpCircle
    },
    {
      title: "Timely Delivery",
      subtitle: "We ensure our products reach you on time, every time.",
      Icon: FiTruck
    }
  ];

  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center text-violet-600">
        Why Choose Us
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {whyChooseUs.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            href="#"
            Icon={item.Icon}
          />
        ))}
      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
  href: string;
}

const Card: React.FC<CardType> = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;