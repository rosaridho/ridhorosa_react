import React, { Component } from 'react';
import propTypes from 'prop-types';

import '../styles/App.css';


class Search extends Component {
  render() {
    return (
        <section className="topsection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-12 offset-md-0">
                        <div id="classSearch">
                            {/* <form className="navbar-form navbar-center"> */}
                                <div className="input-group col-lg-10" style={{width:"100%", paddingTop: "2px"}}>
                                    
                                    <input 
                                    type="text" 
                                    name='search' 
                                    className="form-control" 
                                    id="search" 
                                    value={this.props.keyword} 
                                    placeholder={this.props.placeholder} 
                                    onChange={this.props.doSearch}
                                    />
                                    {/* <input type="text" name='keyword' className="form-control" placeholder="Search"></input> */}
                                    <div className="input-group-btn" style={{padding:"0"}}>
                                        <button className="btn btn-success" type="submit" onClick={this.props.doClickSearch}>
                                            <i className="glyphicon glyphicon-search"></i>
                                        </button>
                                    </div>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
        </div>
        </section>


    );
  }
}

Search.propTypes = {
    title: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired
};




export default Search;