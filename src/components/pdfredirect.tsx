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

const Link = ({ heading, imgSrc, subheading, href, subtypes }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b-2 border-gray-300">
      <motion.div
        className="group relative flex items-center justify-between py-4 transition-colors duration-500 hover:border-gray-800 md:py-8"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between w-full">
          <div>
            <span className="text-4xl font-bold text-gray-600 group-hover:text-gray-900 md:text-6xl">
              {heading}
            </span>
            <span className="mt-2 block text-base text-gray-500 group-hover:text-gray-800">
              {subheading}
            </span>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="p-4"
          >
            <FiChevronDown className="text-3xl text-gray-800" />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && subtypes.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-gray-50"
          >
            <div className="p-4 space-y-2">
              {subtypes.map((subtype, index) => (
                <motion.div
                  key={subtype}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                >
                  <FiArrowRight className="text-lg" />
                  <span>{subtype}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const HoverImageLinks = () => {
  return (
    <section className="bg-white p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        {Object.entries(products).map(([category, [href, subtypes]]) => (
          <Link
            key={category}
            heading={category}
            subheading="SadhGuru Tiles"
            imgSrc=""
            href={href}
            subtypes={subtypes}
          />
        ))}
      </div>
    </section>
  );
};

export default HoverImageLinks;