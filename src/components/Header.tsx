// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Menu, X, Home } from 'lucide-react';
// // import logo from '../../assets/about us/LOGO.jpg'

// // const Header = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <header className="bg-white shadow-lg border-b border-gray-700">
// //       <nav className="container mx-auto px-4 py-4">
// //         <div className="flex justify-between items-center">
// //           <Link to="/" className="flex items-center space-x-2">
// //             <div className='h-8 w-8'>
// //               <img src={logo} alt="logo" />
// //             </div>
// //             <span className="text-xl font-bold text-black">SadhGuru Tiles & Marbles</span>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex space-x-8">
// //   <Link to="/" className="text-black hover:text-blue-400">Home</Link>
// //   <Link to="/products" className="text-black hover:text-blue-400">Products</Link>
// //   <Link to="/aboutus" className="block text-black hover:text-blue-400">About Us</Link>
// //   {/* <Link to="/products" className="text-black hover:text-blue-400">Products</Link> */}
// //   <Link to="/contact" className="text-black hover:text-blue-400">Contact</Link>
// //   <Link to="/careers" className="text-black hover:text-blue-400">Careers</Link>
// //   <Link to="http://13.60.187.34:7171/">
// //     <div className="text-black hover:text-blue-400 bg-blue-600 py-1 px-2">Login</div>
// //   </Link>
// // </div>


// //           {/* Mobile Menu Button */}
// //           <button
// //             className="md:hidden text-black"
// //             onClick={() => setIsOpen(!isOpen)}
// //           >
// //             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //           </button>
// //         </div>

// //         {/* Mobile Navigation */}
// //         {isOpen && (
// //           <div className="md:hidden mt-4 space-y-4">
// //             <Link to="/" className="block text-black hover:text-blue-400">Home</Link>
// //             <Link to="/products" className="block text-black hover:text-blue-400">Products</Link>
// //             <Link to="/aboutus" className="block text-black hover:text-blue-400">About Us</Link>
// //             {/* <Link to="/products" className="block text-black hover:text-blue-400">Products</Link> */}
// //             <Link to="/contact" className="block text-black hover:text-blue-400">Contact</Link>
// //             <Link to="/careers" className="block text-black hover:text-blue-400">Careers</Link>
// //           </div>
// //         )}
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;


// // import React, { ReactNode, useEffect, useState } from "react";
// // import {
// //   FiArrowRight,
// //   FiBarChart2,
// //   FiChevronDown,
// //   FiHome,
// //   FiPieChart,
// // } from "react-icons/fi";
// // import { AnimatePresence, motion } from "framer-motion";

// // export const ShiftingDropDown = () => {
// //   return (
// //     <div className="flex h-96 w-full justify-start bg-neutral-950 p-8 text-neutral-200 md:justify-center">
// //       <Tabs />
// //     </div>
// //   );
// // };

// // const Tabs = () => {
// //   const [selected, setSelected] = useState<number | null>(null);
// //   const [dir, setDir] = useState<null | "l" | "r">(null);

// //   const handleSetSelected = (val: number | null) => {
// //     if (typeof selected === "number" && typeof val === "number") {
// //       setDir(selected > val ? "r" : "l");
// //     } else if (val === null) {
// //       setDir(null);
// //     }

// //     setSelected(val);
// //   };

// //   return (
// //     <div
// //       onMouseLeave={() => handleSetSelected(null)}
// //       className="relative flex h-fit gap-2"
// //     >
// //       {TABS.map((t) => {
// //         return (
// //           <Tab
// //             key={t.id}
// //             selected={selected}
// //             handleSetSelected={handleSetSelected}
// //             tab={t.id}
// //           >
// //             {t.title}
// //           </Tab>
// //         );
// //       })}

// //       <AnimatePresence>
// //         {selected && <Content dir={dir} selected={selected} />}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // const Tab = ({
// //   children,
// //   tab,
// //   handleSetSelected,
// //   selected,
// // }: {
// //   children: ReactNode;
// //   tab: number;
// //   handleSetSelected: (val: number | null) => void;
// //   selected: number | null;
// // }) => {
// //   return (
// //     <button
// //       id={`shift-tab-${tab}`}
// //       onMouseEnter={() => handleSetSelected(tab)}
// //       onClick={() => handleSetSelected(tab)}
// //       className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
// //         selected === tab
// //           ? " bg-neutral-800 text-neutral-100"
// //           : "text-neutral-400"
// //       }`}
// //     >
// //       <span>{children}</span>
// //       <FiChevronDown
// //         className={`transition-transform ${
// //           selected === tab ? "rotate-180" : ""
// //         }`}
// //       />
// //     </button>
// //   );
// // };

// // const Content = ({
// //   selected,
// //   dir,
// // }: {
// //   selected: number | null;
// //   dir: null | "l" | "r";
// // }) => {
// //   return (
// //     <motion.div
// //       id="overlay-content"
// //       initial={{
// //         opacity: 0,
// //         y: 8,
// //       }}
// //       animate={{
// //         opacity: 1,
// //         y: 0,
// //       }}
// //       exit={{
// //         opacity: 0,
// //         y: 8,
// //       }}
// //       className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
// //     >
// //       <Bridge />
// //       <Nub selected={selected} />

// //       {TABS.map((t) => {
// //         return (
// //           <div className="overflow-hidden" key={t.id}>
// //             {selected === t.id && (
// //               <motion.div
// //                 initial={{
// //                   opacity: 0,
// //                   x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
// //                 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.25, ease: "easeInOut" }}
// //               >
// //                 <t.Component />
// //               </motion.div>
// //             )}
// //           </div>
// //         );
// //       })}
// //     </motion.div>
// //   );
// // };

// // const Bridge = () => (
// //   <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
// // );

// // const Nub = ({ selected }: { selected: number | null }) => {
// //   const [left, setLeft] = useState(0);

// //   useEffect(() => {
// //     moveNub();
// //   }, [selected]);

// //   const moveNub = () => {
// //     if (selected) {
// //       const hoveredTab = document.getElementById(`shift-tab-${selected}`);
// //       const overlayContent = document.getElementById("overlay-content");

// //       if (!hoveredTab || !overlayContent) return;

// //       const tabRect = hoveredTab.getBoundingClientRect();
// //       const { left: contentLeft } = overlayContent.getBoundingClientRect();

// //       const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

// //       setLeft(tabCenter);
// //     }
// //   };

// //   return (
// //     <motion.span
// //       style={{
// //         clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
// //       }}
// //       animate={{ left }}
// //       transition={{ duration: 0.25, ease: "easeInOut" }}
// //       className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
// //     />
// //   );
// // };

// // const Products = () => {
// //   return (
// //     <div>
// //       <div className="flex gap-4">
// //         <div>
// //           <h3 className="mb-2 text-sm font-medium">Startup</h3>
// //           <a href="#" className="mb-1 block text-sm text-neutral-400">
// //             Bookkeeping
// //           </a>
// //           <a href="#" className="block text-sm text-neutral-400">
// //             Invoicing
// //           </a>
// //         </div>
// //         <div>
// //           <h3 className="mb-2 text-sm font-medium">Scaleup</h3>
// //           <a href="#" className="mb-1 block text-sm text-neutral-400">
// //             Live Coaching
// //           </a>
// //           <a href="#" className="mb-1 block text-sm text-neutral-400">
// //             Reviews
// //           </a>
// //           <a href="#" className="block text-sm text-neutral-400">
// //             Tax/VAT
// //           </a>
// //         </div>
// //         <div>
// //           <h3 className="mb-2 text-sm font-medium">Enterprise</h3>
// //           <a href="#" className="mb-1 block text-sm text-neutral-400">
// //             White glove
// //           </a>
// //           <a href="#" className="mb-1 block text-sm text-neutral-400">
// //             SOX Compliance
// //           </a>
// //           <a href="#" className="block text-sm text-neutral-400">
// //             Staffing
// //           </a>
// //           <a href="#" className="block text-sm text-neutral-400">
// //             More
// //           </a>
// //         </div>
// //       </div>

// //       <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
// //         <span>View more</span>
// //         <FiArrowRight />
// //       </button>
// //     </div>
// //   );
// // };



// // const TABS = [
// //   {
// //     title: "Products",
// //     Component: Products,
// //   }
// // ].map((n, idx) => ({ ...n, id: idx + 1 }));

// import logo from '../../assets/about us/LOGO.jpg'
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const ProductDropdown = () => {
//   const products = {
//     "Floor Tiles": ["/products/tiles", ["GVT", "Double Charged", "Parking Tiles","Wooden Tiles"]],
//     "Wall Tiles": ["/products/marbles", ["Bathroom Tiles", "Kitchen Tiles", "Imported"]],
//     "Exterior": ["/products/sanitaryware", ["Elevation Glossy"]],
//     "Stone Cladding" : ["/products/sanitaryware",[]],
//     "Marble" : ["/products/sanitaryware",[]],
//     "Quardsz" : ["/products/sanitaryware",[]],
//     "Paints" : ["/products/sanitaryware",[]],
//     "Sanitory Products" : ["/products/sanitaryware",[]],
//   };

//   return (
//     <div className="relative group">
//       <button className="text-black group-hover:text-blue-400">
//         Products
//       </button>
      
//       <div className="invisible group-hover:visible absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
//         {Object.entries(products).map(([category, [link, items]]) => (
//           <div key={category} className="group/item px-4 py-2 hover:bg-gray-100">
//             <Link to={link} className="block text-black hover:text-blue-400">{category}</Link>
//             <div className="hidden group-hover/item:block pl-4 mt-1">
//               {items.map(item => (
//                 <Link 
//                   key={item}
//                   to={`${link}/${item.toLowerCase()}`}
//                   className="block py-1 text-sm text-gray-600 hover:text-blue-400"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Header = () => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return (
//     <header className="bg-white shadow-lg border-b border-gray-700 relative z-50">
//       <nav className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="flex items-center space-x-2">
//             <div className='h-8 w-8'>
//               <img src={logo} alt="logo" />
//             </div>
//             <span className="text-xl font-bold text-black">SadhGuru Tiles & Marbles</span>
//           </Link>

//           <div className="hidden md:flex space-x-8">
//             <Link to="/" className="text-black hover:text-blue-400">Home</Link>
//             <Link to="/products" className="text-black hover:text-blue-400">Products</Link>
//             <Link to="/aboutus" className="text-black hover:text-blue-400">About Us</Link>
//             <Link to="/contact" className="text-black hover:text-blue-400">Contact</Link>
//             <Link to="/careers" className="text-black hover:text-blue-400">Careers</Link>
//             <Link to="http://16.171.154.51:7171/">
//               <div className="text-black hover:text-blue-400 bg-blue-600 py-1 px-2">Login</div>
//             </Link>
//           </div>

//           <button
//             className="md:hidden text-black"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {isOpen && (
//           <div className="md:hidden mt-4 space-y-4">
//           <Link to="/" className="block text-black hover:text-blue-400">Home</Link>
//           <Link to="/products" className="block text-black hover:text-blue-400">Products</Link>
//           <Link to="/aboutus" className="block text-black hover:text-blue-400">About Us</Link>
//           <Link to="/contact" className="block text-black hover:text-blue-400">Contact</Link>
//           <Link to="/careers" className="block text-black hover:text-blue-400">Careers</Link>
          
//           <a 
//             href="http://16.171.154.51:7171/"
//             className="block text-center rounded-md bg-blue-500 px-4 py-2 font-medium text-white transition duration-300 hover:bg-blue-600"
//           >
//             Login
//           </a>
//         </div>        
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

import logo from '../../assets/about us/LOGO.jpg'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    closeMenu();
    window.location.href = "http://16.171.154.51:7171/";
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/aboutus", label: "About Us" },
    { path: "/contact", label: "Contact" },
    { path: "/careers", label: "Careers" },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-700 relative z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="h-8 w-8">
              <img src={logo} alt="logo" />
            </div>
            <span className="text-xl font-bold text-black font-serif">SADHGURU TILES & MARBLES</span>
          </Link>   
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-black hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleLoginClick}
              className="text-black hover:text-blue-400 bg-blue-600 py-1 px-2"
            >
              Login
            </button>
          </div>

          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-black hover:text-blue-400"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleLoginClick}
              className="w-full text-center rounded-md bg-blue-500 px-4 py-2 font-medium text-white transition duration-300 hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;