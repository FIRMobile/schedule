// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { AppState, Platform } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/configure-store';
import LaunchScreen from './components/LaunchScreen';
import AppNavigator from './containers/AppNavigator-container';

const { store, persistor } = configureStore();

class AppInitializer extends React.Component {
  componentWillMount() {
  }

  componentDidMount() {

  }

  render() {
    return this.props.children;
  }
}

export default () => (
  <Provider store={store}>
    <PersistGate loading={<LaunchScreen />} persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>
);

