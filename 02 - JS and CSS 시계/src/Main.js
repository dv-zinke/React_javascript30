import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Container from './components/Container';

const Hot = hot(Container)

ReactDom.render(<Hot />, document.querySelector('#root'))
