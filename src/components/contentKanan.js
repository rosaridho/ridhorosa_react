import React, { Component } from 'react';

import '../styles/App.css';
import News from './contentKananProps.js'

import { connect } from 'unistore/react';
import { actions } from "../store.js";
import { withRouter} from 'react-router-dom';


// const baseUrl = "https://newsapi.org/v2";
// const searchCategory = "/top-headlines";
// const searchSource  = "bbc-news";
// const keyAPI = "31a74b58e4bb4e1bb1d7bb0542dd1d81";
// const myReqUrl = baseUrl + searchCategory + "?sources="+ searchSource + "&apiKey=" + keyAPI


class ContentKanan extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     listNews : []
  //   }
  // }
  
  componentDidMount = () => {
    this.props.showHeadLine()
    // const self = this;

    // axios
    // .get(myReqUrl)
    // .then(function(response){
      
    //   self.setState({listNews: response.data.articles})
    //   console.log(response.data)
    // })
    // .catch(function(error){
    //   console.log(error)
    // })
  }

  render() {
    // const {listNews} = this.state;
    return (
        <div className="album background" id="level-0">
          <div className="headerCart">
                  <div className="col-md-4 col-sm-12 offset-md-1">
                    <div className="flex-container">
                        <div id="kotak3head">
                            <h3 style={{float:"left", marginRight: "150px"}}>Berita Terkini</h3>
                            <a href="https://newsapi.org/v2/everything?q=/everything&apiKey=31a74b58e4bb4e1bb1d7bb0542dd1d81" style={{color:"#699eee"}}>Lihat Semua</a>
                        </div>            
                            {this.props.listNews.map((item, key) => {
                              return <News key={key} title={item.title} url={item.url} />
                            })}
                    </div>
                  </div>
          </div>
        </div>
    );
  }
}

export default connect(
  "listNews",
  actions
)(withRouter(ContentKanan));

// export default ContentKanan;