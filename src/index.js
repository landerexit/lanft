import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import { HashRouter } from 'react-router-dom';

import './sass/style.sass'

import App from './App';

import mainStore from './data/mainStore'

const animationVariants = {
  hidden: {
      opacity: 0
  },

  visible: {
      opacity: 1
  }
}

const stores = {
  mainStore,
  UsersStore : mainStore.UsersStore,
  ShopStore : mainStore.ShopStore,
  ButtonsStore : mainStore.ButtonsStore,

  InitialVars : mainStore.InitialVars,
  ValidationVars : mainStore.ValidationVars
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render((
    <React.StrictMode>
      <HashRouter>
          <Provider {...stores} animationVariants={animationVariants}>
            <App />
          </Provider>
      </HashRouter>
    </React.StrictMode>
  ));