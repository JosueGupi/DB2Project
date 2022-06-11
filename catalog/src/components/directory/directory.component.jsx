
import React, { Fragment } from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

export function Directory ({ sections }) {
  return (
    <Fragment>
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    </Fragment>
  )
}