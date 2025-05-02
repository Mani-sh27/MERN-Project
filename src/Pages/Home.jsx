import React, { useState } from 'react'; // import useState
import HomeCatSlider from '../components/HomeCatSlider';
import AdsBannerSlider from '../components/AdsBannerSlider';
import HomeSlider from '../components/HomeSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductSlider from '../components/ProductSlider';

const Home = () => {
  const [value, setValue] = useState(0); // <-- added value state

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; // <-- added handleChange function

  return (
    <div>
      <HomeSlider />
      <HomeCatSlider />

      <section className=" bg-white">
        <div className="mb-6 ms-5">
          <h2 class Name="text-lg font-semibold text-gray-800">Popular Products</h2>
          <p className="text-gray-500 text-sm mt-1">
            Do not miss the current offers until the end of March.
          </p> 
        </div>
        <div className="px-5 flex  mt-[-70px] space-x-4 flex-col items-end">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Fashion" />
          <Tab label="Electronics" />
          <Tab label="Bags" />
          <Tab label="Footwear" />
          <Tab label="Groceries" />
          <Tab label="Beauty" />
          <Tab label="Wellness" />
          <Tab label="Jewellery" />
        </Tabs>
      </div>
      </section>

    
      <ProductSlider />
      <AdsBannerSlider />
    </div>
  );
};

export default Home;
