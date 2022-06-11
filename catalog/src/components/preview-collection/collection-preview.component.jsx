import React, { Fragment } from 'react';

import {CollectionItem} from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

export function CollectionPreview({title, items}) {
  return (
    <Fragment>
        <div className='collection-preview' >
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .map((item) => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
    </Fragment>
  )
}