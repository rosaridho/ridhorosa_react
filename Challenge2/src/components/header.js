import React, { Component } from 'react';

import reactLogo from '../images/react.svg';

import '../styles/App.css';


class Header extends Component {
  render() {
    return (


        <div className="container-fluid">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              
              <div classNameName="col-md-2 col-sm-6 offset-md-0">
                <div id="myLogo">
                  <p style={{float:"left", marginTop:"12px", marginRight:"12px"}}>RidhoRosa </p><img src={reactLogo} style={{width:"30%"}}/>
                </div>
              </div>    
              
              <div classNameName="col-md-3 col-sm-6 offset-md-0">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontSize:"15px"}}>
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Sepakbola <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Ekonomi</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Politik</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Liburan</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Lainnya
                      </a>
                    </li>
                  </ul>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12 offset-md-0">
                    <div id="classSearch">
                        <form className="navbar-form navbar-center" action="http:127.0.0.1:5000/pembeli/produk/search">
                            <div className="input-group col-lg-10" style={{width:"100%", paddingTop: "2px"}}>
                                <input type="text" name='keyword' className="form-control" placeholder="Search"></input>
                                <div className="input-group-btn">
                                    <button className="btn btn-success" type="submit">
                                        <i className="glyphicon glyphicon-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-md-2 col-sm-6 offset-md-0">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#" style={{fontSize:"15px"}}>Masuk <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" style={{fontSize:"15px"}}>Daftar</a>
                  </li>
                  </ul>
                </div>
                </div>
              
            </nav>
          </div>
        </div>
        
    );
  }
}

export default Header;