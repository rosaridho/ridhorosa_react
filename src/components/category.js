import React, { Component } from 'react';
import propTypes from 'prop-types';

import '../styles/App.css';


class Category extends Component {
  render() {
    return (
        <section className="topsection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-sm-12 offset-md-0">
                        <div id="classSearch">
                            <form className="navbar-form navbar-center">
                                    <div className="input-group-btn">
                                        <button className="btn btn-success" type="submit" onClick={this.props.doClick1}>
                                            <>Sport</>
                                        </button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
        </section>


    );
  }
}

Category.propTypes = {
    title: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired
};




export default Category;