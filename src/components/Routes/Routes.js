'use strict';

import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default Routes
