import React, { Component } from 'react';

import '../styles/App.css';
import News from './contentKiriProps.js';
import axios from 'axios';
import Search from './search';
import Category from './category';


const baseUrl = "https://newsapi.org/v2";
const searchCategory = "/top-headlines";
const searchCategory2 = "/everything?q=";
const searchSource  = "bbc-news";
const keyAPI = "31a74b58e4bb4e1bb1d7bb0542dd1d81";
const kategori1 = 'sport';
const kategori2 = 'business';
const kategori3 = 'technology';
const kategori4 = 'entertainment';


const myReqUrl = baseUrl + searchCategory + "?sources="+ searchSource + "&apiKey=" + keyAPI

const myReqUrl2 = baseUrl + searchCategory2 + kategori1 + "&apiKey=" + keyAPI
const myReqUrl3 = baseUrl + searchCategory2 + kategori2 + "&apiKey=" + keyAPI
const myReqUrl4 = baseUrl + searchCategory2 + kategori3 + "&apiKey=" + keyAPI
const myReqUrl5 = baseUrl + searchCategory2 + kategori4 + "&apiKey=" + keyAPI

class ContentKiri extends Component {
  constructor(props){
    super(props);
    this.state={
      listNews : [],
      username : "",
      isLogin : false,
      search : "",
      click:""
    }
  }
  
  componentDidMount = () => {
    const self = this;

    axios
    .get(myReqUrl)
    .then(function(response){
      
      self.setState({listNews: response.data.articles})
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error)
    })
  }

  
  handleInputChange = e => {
    console.log('event', e.target.value);
    let value = e.target.value;

   
    this.setState(
      {
        search: value
      },
      () => {
        this.searchNews(value);
      }
    );
  };

  handleInputClick = e => {
    console.log(e.target.value);
    let value = "/sport";

    this.setState(
      {
        click: value
      },
      () => {
        this.kategoriNews1(value);
      }
    );
  };

  searchNews = async keyword => {
    console.log('searchNews', keyword);
    const self = this;
    if(keyword.length > 2){
      try {
        
        const response = await axios.get(baseUrl + "/everything?q=" + keyword + "&apiKey=" + keyAPI);
        console.log(response);
        self.setState({listNews : response.data.articles})
        } catch (error){
          console.log(error);
        }
      }
    };


  kategoriNews1 = async keyword => {
    console.log('searchNews', keyword);
    const self = this;
    if(keyword.length > 2){
      try {
        
        const response = await axios.get(baseUrl + "/everything?q=" + keyword + "&apiKey=" + keyAPI);
        console.log(response);
        self.setState({listNews : response.data.articles})
        } catch (error){
          console.log(error);
        }
      }
    };
    
  
  render() {
    const {listNews, username, isLogin} = this.state;
    return (
      <div>
      <Search title = "Cari" placeholder = "type here..." doSearch={this.handleInputChange}
      keyword={this.state.search}/>

      <Category title = "CariKat" doClick1={this.handleInputClick}/>


      <div className="album background" id="level-0">
        <div className="headerCart">
          <div className="col-md-6 col-sm-12 offset-md-0">
            <div className="flex-container">
              {listNews.map((item, key) => {
                return <News key={key} title={item.title} img={item.urlToImage} content={item.content} />
              })}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}


export default ContentKiri;