import React from 'react';
import './collectionPage.styles.scss';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelectors';
import CollectionItem from '../../components/collectionItem/collectionItem';

const CollectionPage = (props) => {
  const collection = useSelector(
    selectCollection(props.match.params.collectionId)
  );
  const { title, items } = collection;
  return (
    <div className='collectionPage'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
