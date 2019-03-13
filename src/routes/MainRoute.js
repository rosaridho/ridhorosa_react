import React from "react";
import { Route, Switch} from "react-router-dom";

import SignIn from '../pages/SignIn.js';
import Profile from '../pages/Profile.js';
import News from '../App';
import Home from '../pages/Home.js';
import SignUp from "../pages/SignUp.js";

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/news" component={News} />
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/signup" component={SignUp} />
        </Switch>
    );
};

export default MainRoute;