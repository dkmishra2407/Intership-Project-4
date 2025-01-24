import React, { useState } from 'react';
import {HoverImageLinks} from '../components/pdfredirect';

// Import Images
import image1 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl01.jpg';
import image2 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl02.jpg';
import image3 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl03.jpg';
import image4 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl04.jpg';
import image5 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl05.jpg';
// import image6 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl06.jpg';
// import image7 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl07.jpg';
// import image8 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl08.jpg';
// import image9 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl09.jpg';
// import image10 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl10.jpg';
import image11 from '../../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext01.jpg';
import image12 from '../../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext02.jpg';
import image13 from '../../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext03.jpg';
import image14 from '../../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext04.jpg';
import image15 from '../../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext05.jpg';
// import image16 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl11.jpg';
// import image17 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl12.jpg';
// import image18 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl13.jpg';
// import image19 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl14.jpg';
// import image20 from '../../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl15.jpg';
// Add imports for images 21 through 60 similarly...

const tileCategories = {
  all: [
    { id: 1, name: 'Double Charge Floor Tile', size: '138*22', image: image1 },
    { id: 2, name: 'Double Charge Floor Tile', size: '138*22', image: image2 },
    { id: 3, name: 'Double Charge Floor Tile', size: '138*22', image: image3 },
    { id: 4, name: 'Double Charge Floor Tile', size: '138*22', image: image4 },
    { id: 5, name: 'Double Charge Floor Tile', size: '138*22', image: image5 },
    { id: 6, name: 'Exterior Parking Tile', size: '138*22', image: image11 },
    { id: 7, name: 'Exterior Parking Tile', size: '138*22', image: image12 },
    { id: 8, name: 'Exterior Parking Tile', size: '138*22', image: image13 },
    { id: 9, name: 'Exterior Parking Tile', size: '138*22', image: image14 },
    { id: 10, name: 'Exterior Parking Tile', size: '138*22', image: image15 },
    // { id: 11, name: 'Double Charge Floor Tile', size: '138*22', image: image16 },
    // { id: 12, name: 'Double Charge Floor Tile', size: '138*22', image: image17 },
    // { id: 13, name: 'Double Charge Floor Tile', size: '138*22', image: image18 },
    // { id: 14, name: 'Double Charge Floor Tile', size: '138*22', image: image19 },
    // { id: 15, name: 'Double Charge Floor Tile', size: '138*22', image: image20 },
    // Add objects for tiles 16 through 60 similarly...
  ],
  doubleCharge: [
    { id: 1, name: 'Double Charge Floor Tile', size: '138*22', image: image1 },
    { id: 2, name: 'Double Charge Floor Tile', size: '138*22', image: image2 },
    { id: 3, name: 'Double Charge Floor Tile', size: '138*22', image: image3 },
    { id: 4, name: 'Double Charge Floor Tile', size: '138*22', image: image4 },
    { id: 5, name: 'Double Charge Floor Tile', size: '138*22', image: image5 },
    // { id: 6, name: 'Double Charge Floor Tile', size: '138*22', image: image16 },
    // { id: 7, name: 'Double Charge Floor Tile', size: '138*22', image: image17 },
    // { id: 8, name: 'Double Charge Floor Tile', size: '138*22', image: image18 },
    // { id: 9, name: 'Double Charge Floor Tile', size: '138*22', image: image19 },
    // { id: 10, name: 'Double Charge Floor Tile', size: '138*22', image: image20 },
    // Add objects for tiles 11 through 60 for Double Charge category similarly...
  ],
  exteriorParking: [
    { id: 6, name: 'Exterior Parking Tile', size: '138*22', image: image11 },
    { id: 7, name: 'Exterior Parking Tile', size: '138*22', image: image12 },
    { id: 8, name: 'Exterior Parking Tile', size: '138*22', image: image13 },
    { id: 9, name: 'Exterior Parking Tile', size: '138*22', image: image14 },
    { id: 10, name: 'Exterior Parking Tile', size: '138*22', image: image15 },
    // Add objects for tiles 11 through 60 for Exterior Parking category similarly...
  ],
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8 text-black">Our Products</h1>

    {/* Filters */}
    <div className="mb-8">
      <div className="flex flex-wrap gap-4">
        {Object.keys(tileCategories).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
          </button>
        ))}
      </div>
    </div>

    {/* Products Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-whitw">
      {tileCategories[activeCategory]?.map((tile) => (
        tile.id && tile.name && tile.size && tile.image ? (
          <div 
            key={tile.id} 
            className="bg-white rounded-lg overflow-hidden border-2 border-blue-500/30 hover:border-blue-500 transition-colors duration-300 shadow-lg shadow-blue-500/10"
          >
            <div className="relative">
              <img
                src={tile.image}
                alt={tile.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"/>
            </div>
            <div className="p-6 bg-grey">
              <span className="text-sm text-blue-400 font-medium">{tile.name}</span>
              <h3 className="text-xl font-semibold text-black mt-2">{tile.name}</h3>
              <p className="text-gray-400 mt-2">{tile.size}</p>
              <button className="mt-4 w-full bg-blue-600 text-black py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        ) : null
      ))}
    </div>
    <HoverImageLinks />
    <div>
    </div>
  </div>
</div>
  );
};

export default Products;
