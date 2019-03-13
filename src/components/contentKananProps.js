import React, { Component } from 'react';
import propTypes from 'prop-types';

import '../styles/App.css';

const News = props => {
  return (
    <div id="kotak3">
    <button type="button" className="btn btn-danger btn-sm" style={{width:"10%"}}>#</button>
    <a href={props.url}> {props.title} </a>
    </div>
  )
}

News.propTypes = {
  title : propTypes.string.isRequired
} 


export default News;