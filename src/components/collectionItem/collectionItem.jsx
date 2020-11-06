import React from 'react';
import './collectionItem.styles.scss';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';
import CustomButton from '../customButton/customButton';

const CollectionItem = ({ item }) => {
  const { imageUrl, name, price } = item;
  const dispatch = useDispatch();
  return (
    <div className='collectionItem'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collectionFooter'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
