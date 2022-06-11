import React, { Fragment } from 'react';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../Images/shopping-bag.svg';


export function CartIcon({ toggleCartHidden, itemCount }) {
    return (
    <Fragment>
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'> { itemCount } </span>
        </div>
    </Fragment>
    )
}

