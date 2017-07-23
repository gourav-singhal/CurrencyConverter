/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import { Main, } from './component/index';
import styles from './index.styles';
import THEME from './theme/index';
import { ROUTES, ROUTECONFIG } from './config/routes';
import { store } from './redux/store/index';

const AppNavigator = StackNavigator({ ...ROUTES }, { ...ROUTECONFIG });

export default class CurrencyConverter extends Component {
  componentWillMount() {
    EStyleSheet.build({ ...THEME });
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
