import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import Layout from './components/layout/Layout'
import rootReducer from './redux/reducers/VideoReducer';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'
import store from './redux/store';

// Page test Data Redux
import Flowdata from './testdata/flowData';

document.title = 'Reconnaissance Tool'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.StrictMode>
        <Layout />
        {/* <Flowdata/> */}
      </React.StrictMode>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
