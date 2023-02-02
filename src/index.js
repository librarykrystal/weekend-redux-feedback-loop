import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// DONE: npm install, npm install redux, npm install react-redux, npm install redux-saga, npm install react-router-dom@5, npm install redux-logger@3
// Added imports:
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Saga SETUP
const sagaMiddleware = createSagaMiddleware();

// REDUCERS



// SAGAS
function* watcherSaga(){
    // yield takeEvery('FETCH_ELEMENTS', fetchElements);
    // yield takeEvery('POST_ELEMENT', postElement);
    console.log('watcherSaga');
}


// STORE
const storeInstance = createStore(
    combineReducers({
        // firstReducer,
        // secondReducer,
        // elementListReducer,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

// Running watcherSaga:
sagaMiddleware.run(watcherSaga);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
// PROVIDER
ReactDOM.render(<Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
