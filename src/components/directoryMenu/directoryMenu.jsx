import React from 'react';
import MenuItem from '../menuItem/menuItem';
import './directoryMenu.styles.scss';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';

const DirectoryMenu = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className='directoryMenu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
