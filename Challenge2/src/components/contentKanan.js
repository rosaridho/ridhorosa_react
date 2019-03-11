import React, { Component } from 'react';

import '../styles/App.css';

class ContentKanan extends Component {
  render() {
    return (
        <div className="album background" id="level-0">
          <div className="headerCart">
                  <div className="col-md-4 col-sm-12 offset-md-1">
                    <div className="flex-container">
                        <div id="kotak3head">
                            <h3 style={{float:"left", marginRight: "200px"}}>Berita Terkini</h3>
                            <h3 style={{color:"#699eee"}}>Lihat Semua</h3>
                        </div>
                        <div id="kotak3">
                            <button type="button" class="btn btn-danger btn-sm" style={{width:"5%"}}>#1</button>
                            <a href="#"> Gabung Alpha Tech Academy Sekarang</a>
                        </div>
                        <div id="kotak3">
                            <button type="button" class="btn btn-danger btn-sm" style={{width:"5%"}}>#2</button>
                            <a href="#"> Ada apa dengan Kobar dan Hasan</a>
                        </div>
                        <div id="kotak3">
                            <button type="button" class="btn btn-danger btn-sm" style={{width:"5%"}}>#3</button>
                            <a href="#"> Mengenal Arafat sang Master Python</a>
                        </div>
                        <div id="kotak3">
                            <button type="button" class="btn btn-danger btn-sm" style={{width:"5%"}}>#4</button>
                            <a href="#"> Belajar React.Js itu seru. Kamu setuju?</a>
                        </div>
                        <div id="kotak3">
                            <button type="button" class="btn btn-danger btn-sm" style={{width:"5%"}}>#5</button>
                            <a href="#"> Sudahkah kamu sehat mental?</a>
                        </div>                        
                      </div>
                  </div>
                </div>
            </div>

    );
  }
}

export default ContentKanan;