import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Page1 from './page1.js';
import Page2 from './page2.js';
import Page3 from './page3.js';

import './App.css';
import './bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        <div>
            <Header/>
            <Page1/>
            <Footer/>
            <Page2/>
            <Page3/>
        </div>


        </header>
      </div>
    );
  }
}

export default App;