import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store.js";


class SignIn extends Component {
    doLogin = () =>{
        const self = this
        this.props.postLogin().then(()=>{
            console.log("this", this);
            self.props.history.replace("./profile");
        });
    };
    render(){
        // console.log('state', this.state);
        console.log("signin", this.props);
        return(
            <section className="content signin">
            <form onSubmit={e=> e.preventDefault()}>
            <div fontSignHead style={{color:'black'}}>
            <h4>Please Sign in</h4>
            </div>
            <div>
                <input
                type = 'text'
                name = 'username'
                placeholder = 'Username'
                onChange={e => this.props.setField(e)}
                /> 
            </div>
            <div>
            <input
                type = 'password'
                name = 'password'
                placeholder = 'Password'
                onChange={e => this.props.setField(e)}
                /> 
            </div>
            <div className="buttonSign">
            
            <button onClick={() => this.doLogin()}>Sign in</button>
            <button type='reset'>Reset</button>
            </div>
            </form>
            </section>
        );
    }
}

export default connect(
    "is_login, username",
    actions
) (withRouter(SignIn));