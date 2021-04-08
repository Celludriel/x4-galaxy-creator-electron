import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from "react-redux";
import rootReducer from './reducers'
import galaxySaga from './sagas/galaxysaga';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);

const store = createStore(
    rootReducer,
    enhancer
)

sagaMiddleware.run(galaxySaga)

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <App />
        </React.Fragment>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
