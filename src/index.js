import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';

import 'jquery/dist/jquery.js'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Allapp from './Allapp/Allapp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
  <Allapp/>
    </div>
    </BrowserRouter>
  

  </React.StrictMode>,
  document.getElementById('root')
);


