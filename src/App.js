'use strict';

var styles = require('./App.scss');
// Imported styles can be referenced
// e.g. className = {styles.title}

import React from 'react';
import {
    render
} from 'react-dom';
import Header from './components/Header/Header';

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header />
            </div>
        );
    }
}

export default App
