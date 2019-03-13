import React, { Component } from 'react';
import bgcontact from '../images/logo-alterra-academy-plain@2x.png';
import user from '../images/ico-user.png'
import email from '../images/ico-email.png'
import phone from '../images/ico-phone.png'

import '../styles/App.css';


class SignUp extends Component {
    render() {
      return (
        <div className="SignUp">
          <header className="SignUp-header">
            

          <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-sm-12 leftcolumn">
                    <a href="about.html">
                    <img className="logoimage after" src={bgcontact}/>
                    </a>
                </div>
                <div className="col-md-6 col-sm-12 rightcolumn">
                    <div className="formisi">
                        <h1>Contact Us</h1>
                            <p>Send us a message and we will get back to you as soon as possible</p>
                                <form>
                                    <label for= "name">Name<span style={{color:"red"}}>*</span></label>
                                    <div className="input-group mb-1">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="name"><img src={user}/></span>
                                        </div>
                                        <input className="form-control" type="text"></input>
                                    </div>
                                    <label for= "email">Email<span style={{color:"red"}}>*</span></label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="email"><img src={email}/></span>
                                        </div>
                                        <input className="form-control" type="email"></input>
                                    </div>
                                    <label for= "phonenumber">Phone Number<span style={{color:"red"}}>*</span></label>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="phonenumber"><img className="editphone" src={phone}/></span>
                                        </div>
                                        <input className="form-control" type="tel"></input>
                                    </div>
                                    <div className="form-group-list">
                                        <label for="national">National</label>
                                        <br></br>
                                        <div className="select-arrow">
                                            <select id="national" className="form-control input-lg">
                                                <option></option>
                                                <option>Indonesia</option>
                                                <option>Malaysia</option>
                                                <option>Singapore</option>
                                                <option>Japan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="message">Message</label>
                                        <textarea className="form-control" id="message" rows="3"></textarea>
                                    </div>
                                <button type="button" className="btn btn-warning btn-lg btn-block">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <script src="./assets/js/bootstrap.min.js"></script>

          </header>
        </div>
      );
    }
  }
  
  export default SignUp;