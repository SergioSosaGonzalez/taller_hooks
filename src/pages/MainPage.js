import React from 'react';
const Image = require('./hooks.png');
const MainPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bienvenidos al curso de Hooks</h1>
      <img src={Image} alt="hooks" />
    </div>
  );
};
export default MainPage;
