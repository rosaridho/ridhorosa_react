import React, { Component } from 'react';

import './styles/App.css';
import './styles/bootstrap.min.css';

import Header from './components/header.js';
import Search from './components/search.js';
import ContentKiri from './components/contentKiri.js';
import ContentKanan from './components/contentKanan.js';
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        <div>
            <Header/>
            <Search/>
            <ContentKiri/>
            <ContentKanan/>
            <Footer/>
        </div>

        </header>
      </div>
    );
  }
}

export default App;