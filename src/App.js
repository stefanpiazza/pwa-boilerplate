'use strict';

var styles = require('./App.scss');
// Imported styles can be referenced
// e.g. className = {styles.title}

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Routes from './components/Routes/Routes';
import Footer from './components/Footer/Footer';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='app'>
                    <Header />
                        <div className='container'>
                            <Routes />
                        </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App
