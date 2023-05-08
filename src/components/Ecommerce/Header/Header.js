import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import './Header.css';

function Header() {
  return (
    <Fragment>
      <div className="EcommerceContainer">
        <header>
          <nav>
            <ul className="header">
              <li>
                <a href="./index.html">HOME</a>
              </li>
              <li>
                <a href="#">STORE</a>
              </li>
              <li>
                <a href="./about.html">ABOUT</a>
              </li>
              <li>
                <HeaderCartButton href="#cart" className="cart-holder">
                  cart<span className="cart-number">0</span>
                </HeaderCartButton>
              </li>
            </ul>
          </nav>
          <h1>The Generics</h1>
        </header>
      </div>
    </Fragment>
  );
}

export default Header;
