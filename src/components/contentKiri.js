import React, { Component } from 'react';

import '../styles/App.css';
import News from './contentKiriProps.js';
import axios from 'axios';
import Search from './search';
import Category from './category';

import { connect } from 'unistore/react';
import { actions } from "../store.js";
import { withRouter} from 'react-router-dom';


const baseUrl = "https://newsapi.org/v2";
const searchCategory = "/top-headlines";
const searchSource  = "bbc-news";
const keyAPI = "31a74b58e4bb4e1bb1d7bb0542dd1d81";


const myReqUrl = baseUrl + searchCategory + "?sources="+ searchSource + "&apiKey=" + keyAPI

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
    // this.props.showArticle()
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

  handleInputClickSearch = e => {
    console.log('event', e.target.value);
    let value = e.target.value;
    this.setState(
      {
        search: value
      },
      () => {
        this.kategoriNews1(value);
      }
    );
  };

  handleInputClick = e => {
   
    console.log("event", e);
    let sport = "/sport";
        this.kategoriNews1(sport);
      
  };

  handleInputClick2 = e => {
   
    console.log("event", e);
    let business = "/business";
        this.kategoriNews1(business);
      
  };

  handleInputClick3 = e => {
   
    console.log("event", e);
    let technology = "/technology";
        this.kategoriNews1(technology);
      
  };

  handleInputClick4 = e => {
   
    console.log("event", e);
    let entertainment = "/entertainment";
        this.kategoriNews1(entertainment);
      
  };

  handleInputClick5 = e => {
   
    console.log("event", e);
    let science = "/science";
        this.kategoriNews1(science);
      
  };

  handleInputClick6 = e => {
   
    console.log("event", e);
    let general = "/general";
        this.kategoriNews1(general);
      
  };

  kategoriNews1 = async value => {
   
    console.log('kategoriNews1', value);
   
    const self = this;
   
      try {
        alert("halo")
        const response = await axios.get(baseUrl + "/everything?q=" + value + "&apiKey=" + keyAPI);
        alert("response")
        alert(baseUrl + "/everything?q=" + value + "&apiKey=" + keyAPI)
        console.log(response);
        self.setState({listNews : response.data.articles})
        } catch (error){
          alert('error')
          console.log(error);
        }
    };
    
  
  render() {
    const {listNews, username, islogin} = this.state;
    return (
      <div>
      <Search title = "Cari" placeholder = "type here..." doSearch={this.handleInputChange}
      keyword={this.state.search} doClickSearch={this.handleInputClickSearch} />

      <Category doClick1={this.handleInputClick} doClick2={this.handleInputClick2} doClick3={this.handleInputClick3} doClick4={this.handleInputClick4} doClick5={this.handleInputClick5} doClick6={this.handleInputClick6}/>


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


// export default connect(
//   "listNews",
//   actions
// )(withRouter(ContentKiri));


export default ContentKiri;