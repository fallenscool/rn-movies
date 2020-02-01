import {applyMiddleware, createStore} from 'redux';
import reducer from '../reducers';
import client from '../axios';

const store = createStore(reducer, applyMiddleware(client));

export default store;
