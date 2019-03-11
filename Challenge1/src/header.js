import React, { Component } from 'react';
import alterra from './images/logo-alterra-academy.png';

import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
          

          <div className="container-fluid">
            <div className="row aboutheader">
                <div className="col-md-6">
                    <img id="logo" src={alterra} />
                </div>
                <div className="col-md-6">
                    <nav>
                        <ul className="nav justify-content-end headerlist" id="navbarku">
                            <li className="nav-item">
                                <a className="nav-link" id="active" href="about.html">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="galery.html">GALLERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">CONTACT</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div> 

        </header>
      </div>
    );
  }
}

export default Header;