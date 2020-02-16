import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import store from './store';

function fancyLog() {
  console.log("%c Rendered with ? ??", "background: purple; color: #FFF");
  console.log(store.getState());
}

const render = () => {
  fancyLog();
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};
store.subscribe(render);
render();
