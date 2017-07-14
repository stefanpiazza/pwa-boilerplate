'use strict';

var styles = require('../styles/index.scss');

import React from 'react';
import {
    render
} from 'react-dom';

import App from './app'

render(<App />, document.getElementById('app'))