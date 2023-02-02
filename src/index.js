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


// REDUCER: Feeling
const feelingR = (state = 0, action) => {
    if(action.type === 'SET_FEELING'){
        console.log('SET_FEELING');
        return action.payload;
    }
    return state;
};

// REDUCER: Understanding
const understandingR = (state = 0, action) => {
    if(action.type === 'SET_UNDERSTANDING'){
        console.log('SET_UNDERSTANDING');
        return action.payload;
    }
    return state;
};

// REDUCER: Support
const supportR = (state = 0, action) => {
    if(action.type === 'SET_SUPPORT'){
        console.log('SET_SUPPORT');
        return action.payload;
    }
    return state;
};

// REDUCER: Comments
const commentsR = (state = '', action) => {
    if(action.type === 'SET_SUPPORT'){
        console.log('SET_SUPPORT');
        return action.payload;
    }
    return state;
};


// SAGA: watcher for actions
function* watcherSaga(){
    // takeEvery: first param is action it's listening for, then redirects it to second param
    yield takeEvery('POST_FEEDBACK', postFeedback);
    console.log('watcherSaga');
}

// SAGA: POST axios
function* postFeedback(action){
    console.log('POST ACTION:', action.payload);
    try{
        yield axios.post('/???', action.payload);
        // yield put({ type: 'FETCH_FEEDBACK'})     // Maybe don't need this unless ADMIN stretch
    } catch (error) {
        console.log('POST ERROR:', error);
    }
}

// SAGA: fetch/GET axios


// STORE
const storeInstance = createStore(
    combineReducers({
        feelingR,
        understandingR,
        supportR,
        commentsR,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

// Running watcherSaga:
sagaMiddleware.run(watcherSaga);

// PROVIDER
ReactDOM.render(<Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
