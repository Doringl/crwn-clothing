import React from 'react';
import './homePage.styles.scss';
import DirectoryMenu from '../../components/directoryMenu/directoryMenu';

const HomePage = () => {
  return (
    <div className='homePage'>
      <DirectoryMenu />
    </div>
  );
};

export default HomePage;
