import React from 'react';
import './homePage.styles.scss';
import DirectoryMenu from '../components/directoryMenu/directoryMenu';

const HomePage = () => {
  return (
    <div className='homePage'>
      <h1>Welcome to my homepage</h1>
      <DirectoryMenu />
    </div>
  );
};

export default HomePage;
