import React, { useState } from 'react';
import ProductLinks from '../components/pdfredirect';

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
    <div className="bg-white">
    <ProductLinks />
    </div>
  );
};

export default Products;
