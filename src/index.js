import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import * as serviceWorker from './common/serviceWorker';
import RootStore from './common/stores/RootStore'
import App from './common/App';
import './index.css'


const rootStore = new RootStore(this);

const Root = (
    <Provider rootStore={rootStore}>
        <App />
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
