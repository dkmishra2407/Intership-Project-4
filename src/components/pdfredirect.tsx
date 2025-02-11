// import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
// import React, { useRef } from "react";
// import { FiArrowRight } from "react-icons/fi";
// import image1 from '../../assets/Slider/---a-beautifully-designed-hero-banner-showcasing-h (1).jpg';
// import image2 from '../../assets/Slider/a-hero-banner-image-featuring-european-style-tile-.jpg';
// import image3 from '../../assets/Slider/a-hero-banner-image-showcasing-outdoor-tiles-in-a-.jpg';
// import image4 from '../../assets/Slider/---a-beautifully-designed-hero-banner-showcasing-h.jpg'
// import image5 from '../../assets/Slider/---a-hero-banner-image-featuring-traditional-india.jpg'
// import image6 from '../../assets/Slider/a-vibrant-hero-banner-image-featuring-an-indian-fe.jpg'
// import image7 from '../../assets/Slider/a-hero-banner-image-showcasing-outdoor-tiles-in-a- (1).jpg'
// import image8 from '../../assets/Slider/a-hero-banner-image-showcasing-outdoor-tiles-in-a-.jpg'

// const products = {
//   "Floor Tiles": ["/products/tiles", ["GVT", "Double Charged", "Parking Tiles","Wooden Tiles"]],
//   "Wall Tiles": ["/products/marbles", ["Bathroom Tiles", "Kitchen Tiles", "Imported"]],
//   "Exterior": ["/products/sanitaryware", ["Elevation Glossy"]],
//   "Stone Cladding" : ["/products/sanitaryware",[]],
//   "Marble" : ["/products/sanitaryware",[]],
//   "Quardsz" : ["/products/sanitaryware",[]],
//   "Paints" : ["/products/sanitaryware",[]],
//   "Sanitory Products" : ["/products/sanitaryware",[]],
// };

// export const HoverImageLinks = () => {
//   return (
//     <section className="bg-white p-4 md:p-8">
//       <div className="mx-auto max-w-5xl">
//       <Link
//         heading="Floor Tiles"
//         subheading="SadhGuru Tiles"
//         imgSrc={image1}
//         href="https://drive.google.com/uc?export=download&id=1ZvTUmJUiRsNtVEDOQ912Ixp5uqwWWozw"
//       />
//       <Link
//         heading="Wall Tiles"
//         subheading="SadhGuru Tiles"
//         imgSrc={image2}
//         href="https://drive.google.com/uc?export=download&id=1Zn0EnQJr8_5MKFNl6kjOFckXnDtxrETQ"
//       />
//       <Link
//         heading="Exterior"
//         subheading="SadhGuru Tiles"
//         imgSrc={image3}
//         href="https://drive.google.com/uc?export=download&id=1Qb5XCmkpKV4lH83FPeAkn9Xlq5WgQk_d"
//       />
//       <Link
//         heading="Marble"
//         subheading="SadhGuru Tiles"
//         imgSrc={image4}
//         href="https://drive.google.com/uc?export=download&id=1BBdjsItmsneMD5mqNTx4yhQFiZNpqyxf"
//       />
//       <Link
//         heading="Quardsz"
//         subheading="SadhGuru Tiles"
//         imgSrc={image6}
//         href="https://drive.google.com/uc?export=download&id=1BBdjsItmsneMD5mqNTx4yhQFiZNpqyxf"
//       />
//       <Link
//         heading="Paints"
//         subheading="SadhGuru Tiles"
//         imgSrc={image6}
//         href="https://drive.google.com/uc?export=download&id=1BBdjsItmsneMD5mqNTx4yhQFiZNpqyxf"
//       />
//       <Link
//         heading="Sanitory Products"
//         subheading="SadhGuru Tiles"
//         imgSrc={image6}
//         href="https://drive.google.com/uc?export=download&id=1BBdjsItmsneMD5mqNTx4yhQFiZNpqyxf"
//       />
//       </div>
//     </section>
//   );
// };

// interface LinkProps {
//   heading: string;
//   imgSrc: string;
//   subheading: string;
//   href: string;
// }

// const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
//   const ref = useRef<HTMLAnchorElement | null>(null);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);

//   const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
//   const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

//   const handleMouseMove = (
//     e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
//   ) => {
//     const rect = ref.current!.getBoundingClientRect();

//     const width = rect.width;
//     const height = rect.height;

//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;

//     x.set(xPct);
//     y.set(yPct);
//   };

//   return (
//     <motion.a
//       href={href}
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       initial="initial"
//       whileHover="whileHover"
//       className="group relative flex items-center justify-between border-b-2 border-gray-300 py-4 transition-colors duration-500 hover:border-gray-800 md:py-8"
//     >
//       <div>
//         <motion.span
//           variants={{
//             initial: { x: 0 },
//             whileHover: { x: -16 },
//           }}
//           transition={{
//             type: "spring",
//             staggerChildren: 0.075,
//             delayChildren: 0.25,
//           }}
//           className="relative z-10 block text-4xl font-bold text-gray-600 transition-colors duration-500 group-hover:text-gray-900 md:text-6xl"
//         >
//           {heading.split("").map((l, i) => (
//             <motion.span
//               variants={{
//                 initial: { x: 0 },
//                 whileHover: { x: 16 },
//               }}
//               transition={{ type: "spring" }}
//               className="inline-block"
//               key={i}
//             >
//               {l}
//             </motion.span>
//           ))}
//         </motion.span>
//         <span className="relative z-10 mt-2 block text-base text-gray-500 transition-colors duration-500 group-hover:text-gray-800">
//           {subheading}
//         </span>
//       </div>

//       <motion.img
//         style={{
//           top,
//           left,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//         variants={{
//           initial: { scale: 0, rotate: "-12.5deg" },
//           whileHover: { scale: 1, rotate: "12.5deg" },
//         }}
//         transition={{ type: "spring" }}
//         src={imgSrc}
//         className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
//         alt={`Image representing a link for ${heading}`}
//       />

//       <motion.div
//         variants={{
//           initial: {
//             x: "25%",
//             opacity: 0,
//           },
//           whileHover: {
//             x: "0%",
//             opacity: 1,
//           },
//         }}
//         transition={{ type: "spring" }}
//         className="relative z-10 p-4"
//       >
//         <FiArrowRight className="text-5xl text-gray-800" />
//       </motion.div>
//     </motion.a>
//   );
// };

// export default HoverImageLinks;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

const products = {
  "Floor Tiles": ["/products/tiles", ["GVT", "Double Charged", "Parking Tiles", "Wooden Tiles"]],
  "Wall Tiles": ["/products/marbles", ["Bathroom Tiles", "Kitchen Tiles", "Imported"]],
  "Exterior": ["/products/sanitaryware", ["Elevation Glossy"]],
  "Stone Cladding": ["/products/sanitaryware", []],
  "Marble": ["/products/sanitaryware", []],
  "Quardsz": ["/products/sanitaryware", []],
  "Paints": ["/products/sanitaryware", []],
  "Sanitory Products": ["/products/sanitaryware", []]
};

const productsize = {
  "GVT": ["/products/tiles", ["600x600", "800x800", "600x1200", "800x1200", "800x1600", "1200x1800"]],
  "Double Charged": ["/products/marbles", ["600x600", "800x800", "600x1200", "800x1200", "800x1600", "1200x1800"]],
  "Parking Tiles": ["/products/sanitaryware", ["300x300", "400x400", "600x600", "800x800"]],
  "Wooden Tiles": ["/products/sanitaryware", ["600x600", "800x800", "600x1200", "800x1200", "800x1600", "1200x1800"]],
  "Bathroom Tiles": ["/products/sanitaryware", ["300x300", "400x400", "600x600", "800x800"]],
  "Kitchen Tiles": ["/products/sanitaryware", ["600x600", "800x800", "600x1200", "800x1200", "800x1600", "1200x1800"]],
  "Imported": ["/products/sanitaryware", ["300x300", "400x400", "600x600", "800x800"]],
  "Elevation Glossy": ["/products/sanitaryware", ["600x600", "800x800", "600x1200", "800x1200", "800x1600", "1200x1800"]]
};

const SubtypeLink = ({ subtype, index }) => {
  const [isSizeExpanded, setIsSizeExpanded] = useState(false);
  const sizes = productsize[subtype]?.[1] || [];

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="border-l-2 border-gray-200 pl-4"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsSizeExpanded(!isSizeExpanded);
        }}
        className="flex cursor-pointer items-center justify-between py-2 hover:text-indigo-600"
      >
        <div className="flex items-center space-x-2">
          <FiArrowRight className="text-lg" />
          <span className="font-medium">{subtype}</span>
        </div>
        {sizes.length > 0 && (
          <motion.div
            animate={{ rotate: isSizeExpanded ? 180 : 0 }}
            className="p-1"
          >
            <FiChevronDown className="text-xl text-gray-600" />
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {isSizeExpanded && sizes.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="ml-6 overflow-hidden"
          >
            <div className="space-y-2 py-2">
              {sizes.map((size, idx) => (
                <motion.div
                  key={size}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-indigo-600"
                >
                  <span className="h-1 w-1 rounded-full bg-gray-400"></span>
                  <span>{size}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Link = ({ heading, subheading, href, subtypes }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <div
        className="group cursor-pointer py-6 transition-all duration-300 hover:bg-gray-50 md:py-8"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-indigo-600 md:text-3xl">
              {heading}
            </h3>
            <p className="text-sm font-medium text-gray-500 md:text-base">
              {subheading}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="p-4"
          >
            <FiChevronDown className="h-6 w-6 text-gray-400 group-hover:text-indigo-600" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && subtypes.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-gray-50"
          >
            <div className="space-y-2 p-4">
              {subtypes.map((subtype, index) => (
                <SubtypeLink key={subtype} subtype={subtype} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductLinks = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Our Products
        </h2>
        <div className="rounded-lg  bg-white shadow-sm">
          {Object.entries(products).map(([category, [href, subtypes]]) => (
            <Link
              key={category}
              heading={category}
              subheading="SadhGuru Tiles"
              href={href}
              subtypes={subtypes}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLinks;