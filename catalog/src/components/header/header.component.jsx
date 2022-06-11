import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../Images/crown.svg";
import { CartIcon } from "../cart-icon/cart-icon.component";
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component.jsx";

import "./header.styles.scss";
import "bootstrap/dist/css/bootstrap.min.css"


export function Header({hidden}) {
  return (
    <Fragment>
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="options">
          <Link className="option" to="/catalog">
            SHOP
          </Link>

          <Link className="option" to="/catalog">
            CONTACT
          </Link>
          <CartIcon />
        </div>
        <p className="king"></p>
      </div>
    </Fragment>
  )
}