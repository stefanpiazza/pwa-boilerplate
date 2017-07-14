'use strict';

var styles = require('./Header.scss');

import React from 'react';
import {
    render
} from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <h1 className='header__title'>App Shell</h1>
            </header>
        );
    }
}

export default Header
