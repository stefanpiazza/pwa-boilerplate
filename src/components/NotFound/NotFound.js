'use strict';

var styles = require('./NotFound.scss');

import React from 'react';
import { render } from 'react-dom';

class NotFound extends React.Component {
    render() {
        return (
            <h1>Route not found.</h1>
        )
    }
}

export default NotFound
