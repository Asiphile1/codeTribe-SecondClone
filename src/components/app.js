import React from 'react';
import Card from './Card';
import './Card.css'
import '../App.css'
import chairImage from '../assets/chairImage-removebg-preview.png';
import lightingImage from '../assets/lightBig-removebg-preview.png';
import couchImage from '../assets/Sofa-Image-removebg-preview.png';

// for import '../App.css' always remember to add the extention and two dots

const App = () => {
  return (
    <div className="app">
      <Card
        image={chairImage}
        title="Stylish Chair"
        description="Chair with minimal style and modern. Wooden and plastic material."
        bgColor="#f3e4d3"
        cardClass="card1"
      />
      <Card
        image={lightingImage}
        title="Lightings"
        description="Roof light and lamps we have wide range. In all colors and lamps also available."
        bgColor="#e0ebf7"
        cardClass="card2"
      />
      <Card
        image={couchImage}
        title="Round shape couch"
        description="Stylish round shape couch is comfortable. Also available in multiple colors."
        bgColor="#f7f1c7"
        cardClass="card3"
      />
    </div>
  );
};

export default App;
