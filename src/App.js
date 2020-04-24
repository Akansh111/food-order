import React from 'react';
import { BurgerMenu } from './BurgerMenu';
import { mainTitle, orderNowTitle } from './shared';
import './App.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="container-fluid">
      <div className="title">
        <h1>{mainTitle}</h1>
        <h3>{orderNowTitle}</h3>
      </div>
        <BurgerMenu />
  </div>
  );
}

export default App;
