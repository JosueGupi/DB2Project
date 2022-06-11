import React, { Fragment } from 'react';
import {CollectionsOverview} from '../collections-overview/collections-overview.component'
import { Header } from '../header/header.component';

export function Catalog({ collections }) {
  return (
    <Fragment>
        <Header/>
        <div className='shop-page'>
            <CollectionsOverview/>
        </div>
    </Fragment>
  )
}