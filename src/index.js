import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {searchRobots} from './reducers'

// Components

import App from './App'

const store = createStore(searchRobots);

ReactDOM.render(<Provider store={store}>
					<App/>
				</Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
