import React, { Component } from 'react';

import iconGal from './images/ico-gallery@2x.png';
import jake from './images/jake-allison-1322894-unsplash.jpg';
import jay from './images/jay-lee-1323073-unsplash.jpg';
import ryan from './images/ryan-1321510-unsplash.jpg';
import nordwood from './images/nordwood-themes-1319985-unsplash.jpg';
import nic from './images/nic-yee-1321843-unsplash.jpg';
import phil from './images/phil-desforges-1322844-unsplash.jpg';

import './App.css';

class Page2 extends Component {
    render() {
      return (
        <div className="Page2">
          <header className="Page2-header">
            

            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 col-sm-1">
                            <img className="picturegalery" src={iconGal}/>
                        </div>
                        <div className="col-md-1 col-sm-1">
                            <h1>Galery</h1>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="card mb-4 shadow-sm">
                                <img className="picture1" src={jake}/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="card mb-4 shadow-sm">
                                <img className="picture2" src={jay}/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="card mb-4 shadow-sm">
                                <img className="picture3" src={nordwood}/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="card mb-4 shadow-sm">
                                <img className="picture4" src={ryan}/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="card mb-4 shadow-sm">
                                <img className="picture5" src={nic}/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="card mb-4 shadow-sm">
                                <img className="picture6" src={phil}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

  
          </header>
        </div>
      );
    }
  }
  
  export default Page2;