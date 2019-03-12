import React from "react";
import { Route, Switch} from "react-router-dom";

import SignIn from '../pages/SignIn.js';
import Profile from '../pages/Profile.js';
import News from '../App';

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/news" component={News} />
        </Switch>
    );
};

export default MainRoute;