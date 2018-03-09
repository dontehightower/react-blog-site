import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route  } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';


//Create two different routes the user can visit and based on the route,
class Hello extends React.Component {
  render() { return <div>Hello</div> }
}

class Goodbye extends React.Component {
  render() { return <div>Goodbye</div> }
}
// Show slightly different content
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/hello' component={Hello} />
        <Route path='/goodbye' component={Goodbye}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
