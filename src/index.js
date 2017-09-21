import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {CreateStore} from './Store';
import './index.css';

let store = CreateStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
