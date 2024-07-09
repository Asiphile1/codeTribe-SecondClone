import React from 'react';
import Card from './card';
import '../App.css'
import chairImage from '../assets/chairImage-removebg-preview.png';
import lightingImage from '../assets/lightBig-removebg-preview.png';
import couchImage from '../assets/Sofa-Image-removebg-preview.png';

const App = () => {
  return (
    <div className="app">
      <Card className='card1'
        image={chairImage}
        title="Stylish Chair"
        description="Chair with minimal style and modern. Wooden and plastic material."
        bgColor="#f3e4d3"
      />
      <Card className='card2'
        image={lightingImage}
        title="Lightings"
        description="Roof light and lamps we have wide range. In all colors and lamps also available."
        bgColor="#e0ebf7"
      />
      <Card className='card3'
        image={couchImage}
        title="Round shape couch"
        description="Stylish round shape couch is comfortable. Also available in multiple colors."
        bgColor="#f7f1c7"
      />
    </div>
  );
};

export default App;
