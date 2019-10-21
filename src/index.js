import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import {store, persistor} from './store';

import App from './App';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#0000FF" />
        <App />
      </PersistGate>
    </Provider>
  );
}
