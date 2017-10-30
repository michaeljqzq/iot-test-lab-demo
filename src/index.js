import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/app';
import reducer from './reducers';
import { hashHistory, Route, Router, StaticRouter } from 'react-router';
import Portal from './portal';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var CommentsWrapper = React.createClass({
  render: function () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
});
render(
    <Router history={hashHistory} >
      <Route path="/" component={Portal} />
      <Route path="/detail/*" component={CommentsWrapper}/>
    </Router>,
    document.getElementById('root')
);

export default store;
