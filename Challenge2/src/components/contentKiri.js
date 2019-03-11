import React, { Component } from 'react';

import tesla from '../images/tesla.jpeg';

import '../styles/App.css';


class ContentKiri extends Component {
  render() {
    return (
      <div className="album background" id="level-0">
        <div className="headerCart">
                  <div className="col-md-6 col-sm-12 offset-md-0">
                    <div className="flex-container">
                      <div id="kotak1">
                      <img src={tesla} style={{width:"100%", float:"left",paddingRight: "10px"}} />
                     
                      </div>
                        <div id="kotak2head">
                            <h2 style={{fontWeight: "bold"}}>Robots coming for YOUR job' warns tech boss Elon Musk</h2>
                        </div>

                        <div id="kotak2">
                            <p>Billionaire technology and space entrepreneur has predicted robots are going to take over nearly all jobs – sending billions to the unemployment line.
                            The SpaceX pioneer said the dawn of artificial intelligence which can step into jobs will mean the world's governments will have to create a "universal basic income".
                            This would mean people being paid a basic wage – even if they did not have a job – to allow them to survive due to the advent of mass automation.</p>
                        </div>
                        <div id="kotak2foot">
                          <a href="" className="fa fa-heart fa-2x"></a>
                          <a href="" className="fa fa-share-alt fa-2x"></a>
                          <a href="" className="fa fa-thumbs-o-down fa-2x"></a>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

    );
  }
}

export default ContentKiri;