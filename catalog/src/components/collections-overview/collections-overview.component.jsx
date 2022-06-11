
import React, { Fragment } from 'react';
import {CollectionPreview} from '../preview-collection/collection-preview.component';

import './collections.overview.styles.scss'

export function CollectionsOverview({collections}) {
  const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
  })
  return (
    <Fragment>
        <div className={'collections-overview'}>
            {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    </Fragment>
  )
}