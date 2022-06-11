import React, { Fragment } from 'react';
import {CustomButton} from '../custom-button/custom-button.component.jsx';

import './collection-item.styles.scss';

export function CollectionItem({item, addItem}) {
  const {name, price, imageUrl} = item;
  return (
    <Fragment>
      <div className="collection-item">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="collection-footer">
          <span className="name"> {name} </span>
          <span className="price"> $ {price} </span>
        </div>
        <CustomButton onClick={ () =>  addItem(item)} inverted>Add to cart</CustomButton>
      </div>
    </Fragment>
  )
}