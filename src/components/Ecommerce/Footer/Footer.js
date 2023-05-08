import React from 'react';
import { faYoutube, faSpotify, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-title">
        The Generics
      </div>
      <div className="footer-icons">
        <ul>
          <li>
            <a href="https://www.youtube.com">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a href="https://spotify.com">
              <FontAwesomeIcon icon={faSpotify} />
            </a>
          </li>
          <li>
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
