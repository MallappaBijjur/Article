import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory, Switch ,BrowserRouter  } from 'react-router';
import Home from './app/screens/Home';
import Created from './app/screens/Components/Create';
import Lists from './app/screens/Components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';


//Reducer
const initialState= {
  article:[{value: 'This is Dummy article', vote: false, count: 0, id:0}]
}

const rootReducer = (state = initialState , action) => {
    switch(action.type) {
      case 'CREATE':
      return {...state, article: [...state.article, {value: action.value, voted: false, id:action.id, count: 0}]};
      case 'VOTE': 
      return { ...state, article: state.article.map( item => item.id === action.id? {...item, count: item.count+1}: item )}      
      default :
      return state;
    }
}




//Store Creater

const store = createStore(rootReducer);


render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Created} />
        <Route path="/list" component={Lists} />
    </Router>
  </Provider>
  ,
  document.getElementById('container')
);


