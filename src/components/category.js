import React, { Component } from 'react';

import '../styles/App.css';


class Category extends Component {
  render() {
    return (
        <section className="topsection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-sm-12 offset-md-0">
                        <div id="classSearch">
                            {/* <form className="navbar-form navbar-center"> #form nya hilangin aja, karna ada form jadi ke redirect */}
                                    <div className="input-group-btn" style={{paddingLeft:"30px"}}>
                                        <button style={{marginRight:"10px"}} className="btn btn-success" type="submit" onClick={this.props.doClick1}>
                                            <>Sport</>
                                        </button>
                                        <button style={{marginRight:"10px"}} className="btn btn-success" type="submit" onClick={this.props.doClick2}>
                                            <>Business</>
                                        </button>
                                        <button style={{marginRight:"10px"}} className="btn btn-success" type="submit" onClick={this.props.doClick3}>
                                            <>Technology</>
                                        </button>
                                        <button style={{marginRight:"10px"}} className="btn btn-success" type="submit" onClick={this.props.doClick4}>
                                            <>Entertainment</>
                                        </button>
                                        <button style={{marginRight:"10px"}} className="btn btn-success" type="submit" onClick={this.props.doClick5}>
                                            <>Science</>
                                        </button>
                                        <button style={{marginRight:"10px"}} className="btn btn-success" type="submit" onClick={this.props.doClick6}>
                                            <>General</>
                                        </button>
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




export default Category;