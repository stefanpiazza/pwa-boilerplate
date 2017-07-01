'use strict';

var styles = require('../styles/app.scss');
// Imported styles can be referenced
// e.g. className = {styles.title}

import React from 'react';
import {
    render
} from 'react-dom';

(function() {
    class App extends React.Component {
        render() {
            return (
                <h1>Hello, world!</h1>
            );
        }
    }

    render(<App />, document.getElementById('app'));
})();
