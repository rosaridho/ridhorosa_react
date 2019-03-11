import React, { Component } from 'react';
import alterraLogo from './images/logoAlterra.png';
import facebook from './images/ico-facebook.png';
import twitter from './images/ico-twitter.png';
import instagram from './images/ico-instagram.png';

import './App.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <header className="Footer-footer">

        <footer className="container-fluid">            
            <div className="row footer">
                <div className="col-md-6">
                    <img id="logofooter" src={alterraLogo}/>
                    <p id="copyright"> &copy; Copyright Alterra Group 2019</p>
                </div>
              
                <div className="col-md-6 sosmedfooter">
                    <div className="followme">
                        <p className="textfollowme">Follow Us On</p>
                        <ul>
                            <li className="listsosmed">
                                <img className="imgsosmed" src={facebook}/>
                                <span className="textsosmed" id="facebook">Facebook</span>
                            </li>
                            <li className="listsosmed">
                                <img className="imgsosmed" src={twitter}/>
                                <span className="textsosmed">Twitter</span>
                            </li>
                            <li className="listsosmed">
                                <img className="imgsosmed" src={instagram}/>
                                <span className="textsosmed">Instagram</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>   
        </footer>

        </header>
      </div>
    );
  }
}

export default Footer;