'use strict';

var styles = require('./Footer.scss');

import React from 'react';
import { render } from 'react-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                <h1 className='footer__title'>App Footer</h1>
            </footer>
        );
    }
}

export default Footer
