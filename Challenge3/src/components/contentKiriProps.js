import React, { Component } from 'react';
import propTypes from 'prop-types';

import '../styles/App.css';

const baseUrl = "https://newsapi.org/v2";
const searchCategory = "/top-headlines";
const searchSource  = "bbc-news";
const keyAPI = "31a74b58e4bb4e1bb1d7bb0542dd1d81";
const myReqUrl = baseUrl + searchCategory + "?sources="+ searchSource + "&apiKey=" + keyAPI


const News = props => {
  return (
    <div>
    <div id="kotak1">
    <img src={props.img} style={{width:"100%", float:"left",paddingRight: "10px"}}/>
    </div>
    <div id="kotak2head"> 
    <h2 style={{fontWeight: "bold"}}>{props.title}</h2>
    </div>
    <div id="kotak2">
        <p>{props.content}</p>
    </div>
    <div id="kotak2foot">
      <a href="" className="fa fa-heart fa-2x"></a>
      <a href="" className="fa fa-share-alt fa-2x"></a>
      <a href="" className="fa fa-thumbs-o-down fa-2x"></a>
    </div>
    </div>
  )
}

News.propTypes = {
  title : propTypes.string.isRequired, 
  content : propTypes.string.isRequired,
  img : propTypes.string,
} 


export default News;